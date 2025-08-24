import type { FC, ReactNode } from 'react';

interface TextProps {
    children: ReactNode;
    className?: string;
}

export const Text: FC<TextProps> = ({ children, className }) => {
	return (
		<p className={className}>
			{children}
		</p>
	);
};