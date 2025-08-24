import type { ReactNode } from 'react';

import styles from './BackgroundSection.module.scss';

type BackgroundSectionProps = {
    children: ReactNode;
	backgroundImage: string;
    className?: string;
};

export const BackgroundSection = ({children, backgroundImage, className = ''}: BackgroundSectionProps) => {
	return (
		<div
			className={`${styles.backgroundSection} ${className}`}
			style={{backgroundImage: `url(${backgroundImage})`}}
		>
			<div className={styles.backgroundSection__overlay}/>
			<div className={styles.backgroundSection__content}>
				{children}
			</div>
		</div>
	);
};