'use client';

import type { FC, ReactNode } from 'react';
import React, { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
    onIndexChange?: (index: number) => void;
}

interface SliderMetrics {
    containerWidth: number;
    gap: number;
    maxScroll: number;
    slidePositions: number[];
}

const DEBOUNCE_TIMEOUT = 150;
const RESIZE_TIMEOUT = 300;

export const Slider: FC<SliderProps> = memo(({
	children,
	buttonsPosition = 'top',
	buttonsStyle = '',
	sliderStyle = '',
	containerStyle = '',
	button,
	onIndexChange,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [slideWidths, setSlideWidths] = useState<number[]>([]);
	const scrollTimeoutRef = useRef<number>(0);
	const resizeTimeoutRef = useRef<number>(0);
	const isManualScrollingRef = useRef(false);
	const metricsRef = useRef<SliderMetrics>({
		containerWidth: 0,
		gap: 0,
		maxScroll: 0,
		slidePositions: [],
	});

	const areArraysEqual = useCallback((a: number[], b: number[]): boolean => {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (Math.abs(a[i] - b[i]) > 0.5) return false;
		}
		return true;
	}, []);

	const measureSlides = useCallback(() => {
		const newWidths = slideRefs.current.map(ref =>
			ref ? ref.getBoundingClientRect().width : 0,
		);

		if (!areArraysEqual(newWidths, slideWidths)) {
			setSlideWidths(newWidths);
		}
	}, [slideWidths, areArraysEqual]);

	useMemo(() => {
		if (!sliderContainerRef.current || slideWidths.length === 0) {
			return;
		}

		const containerStyles = window.getComputedStyle(sliderContainerRef.current);
		const gapValue = containerStyles.gap || '0px';
		const gapWidthPx = parseFloat(gapValue) || 0;
		const containerWidth = sliderContainerRef.current.clientWidth;

		const slidePositions: number[] = [];
		let currentPosition = 0;

		for (let i = 0; i < slideWidths.length; i++) {
			const width = slideWidths[i];
			slidePositions[i] = currentPosition;
			currentPosition += width + (i < slideWidths.length - 1 ? gapWidthPx : 0);
		}

		const totalSlidesWidth = slidePositions.length > 0 ?
			slidePositions[slidePositions.length - 1] + slideWidths[slideWidths.length - 1] : 0;

		const maxScroll = Math.max(0, totalSlidesWidth - containerWidth);

		metricsRef.current = {
			containerWidth,
			gap: gapWidthPx,
			maxScroll,
			slidePositions,
		};
	}, [slideWidths]);

	const findClosestSlideIndex = useCallback((scrollLeft: number): number => {
		const slidePositions = metricsRef.current.slidePositions;
		if (slidePositions.length === 0) return 0;

		let start = 0;
		let end = slidePositions.length - 1;

		if (scrollLeft <= slidePositions[0]) return 0;
		if (scrollLeft >= slidePositions[end]) return end;

		while (start <= end) {
			const mid = Math.floor((start + end) / 2);

			if (scrollLeft === slidePositions[mid]) {
				return mid;
			}

			if (scrollLeft < slidePositions[mid]) {
				if (mid > 0 && scrollLeft > slidePositions[mid - 1]) {
					return scrollLeft - slidePositions[mid - 1] < slidePositions[mid] - scrollLeft ? mid - 1 : mid;
				}
				end = mid - 1;
			} else {
				if (mid < slidePositions.length - 1 && scrollLeft < slidePositions[mid + 1]) {
					return slidePositions[mid + 1] - scrollLeft < scrollLeft - slidePositions[mid] ? mid + 1 : mid;
				}
				start = mid + 1;
			}
		}

		return Math.min(start, children.length - 1);
	}, [children.length]);

	const scrollToIndex = useCallback((index: number, behavior: 'auto' | 'smooth' = 'smooth') => {
		if (!sliderContainerRef.current || metricsRef.current.slidePositions.length <= index) return;

		const targetPosition = metricsRef.current.slidePositions[index];
		const targetScroll = Math.min(targetPosition, metricsRef.current.maxScroll);

		sliderContainerRef.current.scrollTo({
			behavior,
			left: targetScroll,
		});
	}, []);

	const handlePrevious = useCallback(() => {
		if (currentIndex <= 0) return;

		const newIndex = currentIndex - 1;
		setCurrentIndex(newIndex);
		onIndexChange?.(newIndex);
		scrollToIndex(newIndex);
	}, [currentIndex, scrollToIndex, onIndexChange]);

	const handleNext = useCallback(() => {
		const newIndex = Math.min(children.length - 1, currentIndex + 1);
		if (newIndex === currentIndex) return;

		setCurrentIndex(newIndex);
		onIndexChange?.(newIndex);
		scrollToIndex(newIndex);
	}, [currentIndex, children.length, scrollToIndex, onIndexChange]);

	useLayoutEffect(() => {
		slideRefs.current = slideRefs.current.slice(0, children.length);
		while (slideRefs.current.length < children.length) {
			slideRefs.current.push(null);
		}

		measureSlides();

		if (!sliderContainerRef.current) return;

		const resizeObserver = typeof ResizeObserver !== 'undefined'
			? new ResizeObserver(() => {
				if (resizeTimeoutRef.current) {
					window.clearTimeout(resizeTimeoutRef.current);
				}
				resizeTimeoutRef.current = window.setTimeout(() => {
					measureSlides();
					scrollToIndex(currentIndex, 'auto');
				}, RESIZE_TIMEOUT);
			})
			: null;

		if (resizeObserver) {
			slideRefs.current.forEach(ref => {
				if (ref) resizeObserver.observe(ref);
			});
		}

		const handleResize = () => {
			if (resizeTimeoutRef.current) {
				window.clearTimeout(resizeTimeoutRef.current);
			}
			resizeTimeoutRef.current = window.setTimeout(() => {
				measureSlides();
				scrollToIndex(currentIndex, 'auto');
			}, RESIZE_TIMEOUT);
		};

		window.addEventListener('resize', handleResize);

		const handleScroll = () => {
			if (!sliderContainerRef.current) return;

			const scrollLeft = sliderContainerRef.current.scrollLeft;
			const newIndex = findClosestSlideIndex(scrollLeft);

			if (newIndex !== currentIndex) {
				setCurrentIndex(newIndex);
				onIndexChange?.(newIndex);
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
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
			window.removeEventListener('resize', handleResize);
			container.removeEventListener('scroll', handleScroll);

			if (scrollTimeoutRef.current) {
				window.clearTimeout(scrollTimeoutRef.current);
			}
			if (resizeTimeoutRef.current) {
				window.clearTimeout(resizeTimeoutRef.current);
			}
		};
	}, [children.length, currentIndex, measureSlides, scrollToIndex, findClosestSlideIndex, onIndexChange]);

	const isAtStart = currentIndex <= 0;
	const isAtEnd = currentIndex >= children.length - 1 ||
        (!!sliderContainerRef.current && sliderContainerRef.current.scrollLeft >= metricsRef.current.maxScroll - 1);

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
});