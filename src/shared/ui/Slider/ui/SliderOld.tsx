'use client';

import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cn } from 'shared/lib';

import style from './Slider.module.scss';

interface SliderStyleProps {
    buttonsPosition?: 'top' | 'middle' | 'bottom';
    buttonsStyle?: string;
    sliderStyle?: string;
    containerStyle?: string;
}

interface SliderProps extends SliderStyleProps {
    children: ReactNode[];
    button: ReactNode;
}

interface SliderMetrics {
    containerWidth: number;
    gap: number;
    maxScroll: number;
    slidePositions: number[];
}

const DEBOUNCE_TIMEOUT = 150;
const RESIZE_TIMEOUT = 300;

export const SliderOld: FC<SliderProps> = ({
	children,
	buttonsPosition = 'top',
	buttonsStyle = '',
	sliderStyle = '',
	containerStyle = '',
	button,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [slideWidths, setSlideWidths] = useState<number[]>([]);
	const scrollTimeoutRef = useRef<number>(0);
	const resizeTimeoutRef = useRef<number>(0);
	const isManualScrollingRef = useRef(false);

	const metrics = useMemo<SliderMetrics>(() => {
		if (!sliderContainerRef.current || slideWidths.length === 0) {
			return { containerWidth: 0, gap: 0, maxScroll: 0, slidePositions: [] };
		}

		const containerStyles = window.getComputedStyle(sliderContainerRef.current);
		const gapValue = containerStyles.gap || '0px';
		const gapWidthPx = parseFloat(gapValue) || 0;
		const containerWidth = sliderContainerRef.current.clientWidth;

		const slidePositions: number[] = [];
		let currentPosition = 0;

		slideWidths.forEach((width, index) => {
			slidePositions[index] = currentPosition;
			currentPosition += width + (index < slideWidths.length - 1 ? gapWidthPx : 0);
		});

		const totalSlidesWidth = slidePositions.length > 0 ?
			slidePositions[slidePositions.length - 1] + slideWidths[slideWidths.length - 1] : 0;

		const maxScroll = Math.max(0, totalSlidesWidth - containerWidth);

		return {
			containerWidth,
			gap: gapWidthPx,
			maxScroll,
			slidePositions
		};
	}, [slideWidths]);

	const measureSlides = useCallback(() => {
		const newWidths = slideRefs.current.map(ref =>
			ref ? ref.getBoundingClientRect().width : 0
		);

		if (JSON.stringify(newWidths) !== JSON.stringify(slideWidths)) {
			setSlideWidths(newWidths);
		}
	}, [slideWidths]);

	const findClosestSlideIndex = useCallback((scrollLeft: number): number => {
		if (metrics.slidePositions.length === 0) return 0;

		let closestIndex = 0;
		let minDistance = Number.MAX_VALUE;

		metrics.slidePositions.forEach((position, index) => {
			const distance = Math.abs(scrollLeft - position);
			if (distance < minDistance) {
				minDistance = distance;
				closestIndex = index;
			}
		});

		return Math.min(closestIndex, children.length - 1);
	}, [metrics.slidePositions, children.length]);

	const scrollToIndex = useCallback((index: number, behavior: 'auto' | 'smooth' = 'smooth') => {
		if (!sliderContainerRef.current || metrics.slidePositions.length <= index) return;

		const targetPosition = metrics.slidePositions[index];
		const targetScroll = Math.min(targetPosition, metrics.maxScroll);

		sliderContainerRef.current.scrollTo({
			behavior,
			left: targetScroll
		});
	}, [metrics.slidePositions, metrics.maxScroll]);

	const handlePrevious = useCallback(() => {
		if (currentIndex <= 0) return;

		const newIndex = currentIndex - 1;
		setCurrentIndex(newIndex);

		scrollToIndex(newIndex);
	}, [currentIndex, scrollToIndex]);

	const handleNext = useCallback(() => {
		const newIndex = Math.min(children.length - 1, currentIndex + 1);
		if (newIndex === currentIndex) return;

		setCurrentIndex(newIndex);

		scrollToIndex(newIndex);
	}, [currentIndex, children.length, scrollToIndex]);

	useEffect(() => {
		slideRefs.current = slideRefs.current.slice(0, children.length);
		while (slideRefs.current.length < children.length) {
			slideRefs.current.push(null);
		}

		measureSlides();
	}, [children.length, measureSlides]);

	useEffect(() => {
		if (!sliderContainerRef.current) return;

		if (typeof ResizeObserver !== 'undefined') {
			const observer = new ResizeObserver(measureSlides);

			slideRefs.current.forEach(ref => {
				if (ref) observer.observe(ref);
			});

			return () => observer.disconnect();
		}

		const handleResize = () => measureSlides();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [measureSlides]);

	useEffect(() => {
		if (!sliderContainerRef.current) return;

		const handleScroll = () => {
			if (!sliderContainerRef.current) return;

			const scrollLeft = sliderContainerRef.current.scrollLeft;
			const newIndex = findClosestSlideIndex(scrollLeft);

			if (newIndex !== currentIndex) {
				setCurrentIndex(newIndex);
			}

			isManualScrollingRef.current = true;

			if (scrollTimeoutRef.current) {
				window.clearTimeout(scrollTimeoutRef.current);
			}

			scrollTimeoutRef.current = window.setTimeout(() => {
				if (isManualScrollingRef.current && sliderContainerRef.current) {
					scrollToIndex(newIndex);
					isManualScrollingRef.current = false;
				}
			}, DEBOUNCE_TIMEOUT);
		};

		const container = sliderContainerRef.current;
		container.addEventListener('scroll', handleScroll);

		return () => {
			container.removeEventListener('scroll', handleScroll);
			if (scrollTimeoutRef.current) {
				window.clearTimeout(scrollTimeoutRef.current);
			}
		};
	}, [currentIndex, findClosestSlideIndex, scrollToIndex]);

	useEffect(() => {
		const handleResizeComplete = () => {
			scrollToIndex(currentIndex, 'auto');
		};

		const debouncedHandleResize = () => {
			if (resizeTimeoutRef.current) {
				window.clearTimeout(resizeTimeoutRef.current);
			}

			resizeTimeoutRef.current = window.setTimeout(handleResizeComplete, RESIZE_TIMEOUT);
		};

		window.addEventListener('resize', debouncedHandleResize);
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
			if (resizeTimeoutRef.current) {
				window.clearTimeout(resizeTimeoutRef.current);
			}
		};
	}, [currentIndex, scrollToIndex]);

	const isAtStart = currentIndex <= 0;
	const isAtEnd = currentIndex >= children.length - 1 ||
        (!!sliderContainerRef.current && sliderContainerRef.current.scrollLeft >= metrics.maxScroll - 1);

	return (
		<div
			className={cn([style.slider, sliderStyle, style[`slider_${buttonsPosition}`]])}>
			<div className={cn([style.slider__buttons, buttonsStyle])}>
				<div
					className={cn([style.slider__buttons_backward], { [style.disabled]: isAtStart })}
					onClick={handlePrevious}
				>
					{button}
				</div>
				<div
					className={cn([style.slider__buttons_forward], { [style.disabled]: isAtEnd })}
					onClick={handleNext}
				>
					{button}
				</div>
			</div>

			<div ref={sliderContainerRef} className={cn([style.slider__container, containerStyle])}>
				{children.map((slide, index) => (
					<div
						key={index}
						ref={el => {
							slideRefs.current[index] = el;
						}}
						className={style.slider__slide}
					>
						{slide}
					</div>
				))}
			</div>
		</div>
	);
};