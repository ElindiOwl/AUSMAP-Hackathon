'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    portal: HTMLElement | DocumentFragment | string;
}

export const Portal: FC<PortalProps> = ({ children, portal }) => {
	const [container, setContainer] = useState<HTMLElement | DocumentFragment | null>(null);
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);
	}, []);

	useEffect(() => {
		if (!isHydrated) return;

		const findPortalTarget = () => {
			if (typeof portal === 'string') {
				if (!portal.trim()) {
					return;
				}

				const element = document.getElementById(portal);
				if (element) {
					setContainer(element);
				} else {
					if (document.readyState !== 'complete') {
						window.setTimeout(findPortalTarget, 100);
					} else {
						window.console.error(`Portal target with ID '${portal}' not found in DOM`);
					}
				}
			} else if (portal) {
				setContainer(portal as HTMLElement | DocumentFragment);
			}
		};

		if (document.readyState === 'complete') {
			findPortalTarget();
		} else {
			window.addEventListener('load', findPortalTarget);
			return () => {
				window.removeEventListener('load', findPortalTarget);
			};
		}
	}, [portal, isHydrated]);

	if (!isHydrated) return null;
	return container ? createPortal(children, container) : null;
};