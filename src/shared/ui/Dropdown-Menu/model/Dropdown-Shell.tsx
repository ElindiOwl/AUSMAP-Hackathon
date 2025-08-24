import type { FC, ReactNode, RefObject } from 'react';
import { memo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Portal } from './Portal';

interface DropdownContentProps {
    children: ReactNode;
    containerStyling: string;
}

interface DropdownShellProps extends DropdownContentProps {
    portalElement: HTMLElement | string;
    toggleRef: RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
    animationClasses: {
        enter: string;
        enterActive: string;
        exit: string;
        exitActive: string;
    };
    animationTimeout: number;
}

export const DropdownShell: FC<DropdownShellProps> = memo(({
	portalElement,
	containerStyling,
	children,
	isMenuOpen,
	animationClasses,
	animationTimeout,
}) => {
	const nodeRef = useRef(null);

	return (
		<Portal portal={portalElement}>
			<CSSTransition
				unmountOnExit
				classNames={animationClasses}
				in={isMenuOpen}
				nodeRef={nodeRef}
				timeout={animationTimeout}
			>
				<div ref={nodeRef} className={containerStyling}>
					{children}
				</div>
			</CSSTransition>
		</Portal>
	)
});