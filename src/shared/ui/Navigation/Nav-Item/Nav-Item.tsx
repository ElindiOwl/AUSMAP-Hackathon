import type { FC } from 'react';
import { memo } from 'react';
import { Link } from 'react-router';

interface NavItemStates {
    isExternal?: boolean;
}

interface NavItemProps extends NavItemStates {
    url: string,
    title: string
}

export const NavItem: FC<NavItemProps> = memo(({ url, title, isExternal = false }) => {
	if (isExternal) return <a href={url}>{title}</a>;
	return <Link to={url}>{title}</Link>;
});