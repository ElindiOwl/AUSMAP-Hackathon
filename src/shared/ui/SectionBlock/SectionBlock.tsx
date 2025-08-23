import type { CSSProperties, ReactNode } from 'react';

import styles from './SectionBlock.module.scss';

interface SectionBlockProps {
    children: ReactNode;
    color?: string;
    className?: string;
    style?: CSSProperties;
}

export const SectionBlock = ({ children, color, className = '', style = {}, ...props }: SectionBlockProps) => (
	<div
		className={`${styles.block} ${className}`.trim()}
		style={{ background: color, ...style }}
		{...props}
	>
		{children}
	</div>
);
