import React from 'react';
import { cn } from 'shared/lib';

import styles from './BlockItem.module.scss';

interface BlockItemProps {
    children: React.ReactNode;
    variant?: 'cyan' | 'yellow' | 'blue' | 'red' | 'green';
    className?: string;
}

export const BlockItem = ({ children, variant, className = '' }: BlockItemProps) => (
	<div className={cn([styles.blockItem, variant && styles[variant], className])}>
		{children}
	</div>
);
