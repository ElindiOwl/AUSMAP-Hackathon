'use client';

import { useEffect, useRef, useState } from 'react';

import { eventSystem } from './event-system';

export const useMenu = (menuName: string, disablePageScroll: boolean = false) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsMounted(true);
		return () => {
			setIsMounted(false);
		};
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		const handleOutsideClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (menuRef.current && !menuRef.current.contains(target)) {
				setIsMenuOpen(false);
				if (disablePageScroll) {
					document.body.style.overflow = '';
				}
			}
		};

		const handleMenuEvent = (openMenuName: string) => {
			if (openMenuName !== menuName) {
				setIsMenuOpen(false);
				if (disablePageScroll) {
					document.body.style.overflow = '';
				}
			}
		};

		document.addEventListener('click', handleOutsideClick);
		eventSystem.subscribe('menuToggled', handleMenuEvent);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
			eventSystem.unsubscribe('menuToggled', handleMenuEvent);
		};
	}, [menuName, disablePageScroll, isMounted]);

	const toggleMenu = () => {
		if (!isMounted) return;

		const newState = !isMenuOpen;
		setIsMenuOpen(newState);

		if (newState) {
			eventSystem.publish('menuToggled', menuName);
			if (disablePageScroll) {
				document.body.style.overflow = 'hidden';
			}
		} else {
			if (disablePageScroll) {
				document.body.style.overflow = '';
			}
		}
	};

	return { isMenuOpen, menuRef, toggleMenu };
};