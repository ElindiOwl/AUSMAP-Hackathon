'use client';

import { useEffect, useState } from 'react';

export const useIdToHook = (elementId: string): HTMLElement | null => {
	const [element, setElement] = useState<HTMLElement | null>(null);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		return () => {
			setIsMounted(false);
		};
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		const elem = document.getElementById(elementId);
		if (elem) {
			setElement(elem as HTMLElement);
		}
	}, [elementId, isMounted]);

	useEffect(() => {
		if (!isMounted) return;

		const getElement = () => {
			const elem = document.getElementById(elementId);
			if (elem) {
				setElement(elem as HTMLElement);
			}
		};

		if (typeof MutationObserver === 'undefined') {
			getElement();
			return;
		}

		const observer = new MutationObserver(() => {
			getElement();
		});

		if (!element) {
			observer.observe(document.body, { childList: true, subtree: true });
			getElement();
		}

		return () => {
			observer.disconnect();
		};
	}, [elementId, element, isMounted]);

	return element;
};