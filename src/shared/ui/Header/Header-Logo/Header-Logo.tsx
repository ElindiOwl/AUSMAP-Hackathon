import { Link } from 'react-router';
import { cn } from 'shared/lib';
import React, { type FC, memo } from 'react';

interface HeaderLogoStyles {
    linkStyle?: string
}

interface HeaderLogoProps extends HeaderLogoStyles {
    children: React.ReactNode,
    link?: string,
}

export const HeaderLogo: FC<HeaderLogoProps> = memo(({ children = null, linkStyle = '', link = '/' }) => {
	return (
		<Link className={cn([linkStyle])} to={link}>
			{children}
		</Link>
	)
});