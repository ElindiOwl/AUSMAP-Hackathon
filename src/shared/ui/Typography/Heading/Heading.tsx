import type { FC, ReactNode } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
    level: HeadingLevel;
    children: ReactNode;
    className?: string;
}

export const Heading: FC<HeadingProps> = ({ level, children, className }) => {
	const Component = level;

	return (
		<Component className={className}>
			{children}
		</Component>
	);
};