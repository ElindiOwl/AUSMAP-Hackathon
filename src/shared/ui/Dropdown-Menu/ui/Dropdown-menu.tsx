import type { FC, MouseEventHandler } from 'react';
import React, { memo, useId } from 'react';
import { cn } from 'shared/lib';

import { useMenu } from '../model/useMenu';
import { DropdownShell } from '../model/Dropdown-Shell';

interface DropdownControlProps {
    shellItems: React.ReactNode;
    elementToHook: HTMLElement | string;
    children: React.ReactNode;
}

interface DropdownMenuProps extends DropdownControlProps {
    shellContainerStyling: string;
    menuName: string;
    disablePageScroll?: boolean;
    activeStyle?: string;
    inactiveStyle?: string;
    animationClasses?: {
        enter: string;
        enterActive: string;
        exit: string;
        exitActive: string;
    };
    animationTimeout?: number;
}

export const DropdownMenu: FC<DropdownMenuProps> = memo(({
	shellItems,
	elementToHook,
	children,
	shellContainerStyling,
	menuName,
	disablePageScroll = false,
	activeStyle = '',
	inactiveStyle = '',
	animationClasses = {
		enter: '',
		enterActive: '',
		exit: '',
		exitActive: '',
	},
	animationTimeout = 0,
}) => {
	const uniqueId = useId();
	const menuId = menuName || uniqueId;
	const { isMenuOpen, toggleMenu, menuRef } = useMenu(menuId, disablePageScroll);
	const appliedStyle = cn([inactiveStyle], { [activeStyle]: isMenuOpen },);

	const handleClickInside: MouseEventHandler<HTMLDivElement> = (event) => {
		event.stopPropagation();
	};

	return (
		<div ref={menuRef} onClick={handleClickInside}>
			<div className={appliedStyle} onClick={toggleMenu}>
				{children}
			</div>
			<DropdownShell
				children={shellItems}
				animationClasses={animationClasses}
				animationTimeout={animationTimeout}
				containerStyling={shellContainerStyling}
				isMenuOpen={isMenuOpen}
				portalElement={elementToHook}
				toggleRef={menuRef as React.RefObject<HTMLDivElement>}
			/>
		</div>
	);
});