import type { ReactNode } from 'react';
import { cn } from 'shared/lib';

import styles from './BackgroundSection.module.scss';

type BackgroundSectionProps = {
    children: ReactNode;
    backgroundImage: string;
    containerClassName?: string;
    overlayClassName?: string;
    childrenContainerClassName?: string;
};

export const BackgroundSection = ({
	children,
	backgroundImage,
	containerClassName = '',
	overlayClassName = '',
	childrenContainerClassName = ''
}: BackgroundSectionProps) => {
	return (
		<div
			className={cn([styles.backgroundSection, containerClassName])}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className={cn([styles.backgroundSection__overlay, overlayClassName])}/>
			<div className={cn([styles.backgroundSection__content, childrenContainerClassName])}>
				{children}
			</div>
		</div>
	);
};