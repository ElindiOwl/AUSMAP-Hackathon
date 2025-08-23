import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { cn } from 'shared/lib';

import style from './Wrapper.module.scss';

interface WrapperStyles {
    headerStyles?: string;
    mainStyles?: string;
    footerStyles?: string;
}

interface WrapperProps extends WrapperStyles {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}

export const Wrapper: FC<WrapperProps> = memo(({
	children,
	header = null,
	footer = null,
	headerStyles = '',
	mainStyles = '',
	footerStyles = ''
}) => {
	return (
		<div className={style.wrapper}>
			<header className={cn([style.wrapper__header, headerStyles])}>
				{header}
			</header>
			<main className={cn([style.wrapper__main, mainStyles])}>
				{children}
			</main>
			<footer className={cn([style.wrapper__footer, footerStyles])}>
				{footer}
			</footer>
		</div>
	);
});