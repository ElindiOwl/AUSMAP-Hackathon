import { cn } from 'shared/lib';
import type { ReactNode } from 'react';

import styles from './BlockItem.module.scss';

interface BlockItemProps {
    children: ReactNode;
    variant?: 'cyan' | 'yellow' | 'blue' | 'red' | 'green';
    className?: string;
}

export const BlockItem = ({ children, variant, className = '' }: BlockItemProps) => (
	<div className={cn([styles.blockItem, variant ? styles[variant] : '', className])}>
		{children}
	</div>
);
