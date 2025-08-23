import type { FC, ReactNode } from 'react';
import { memo } from 'react';

export interface ButtonProperties {
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
}

interface ButtonProps extends ButtonProperties {
    buttonStyle?: string;
    text?: string;
    children?: ReactNode;
}

export const RegularButton: FC<ButtonProps> = memo(({
	text,
	children,
	buttonStyle = '',
	onClick,
	type = undefined,
	disabled = false
}) => {
	return (
		<button className={buttonStyle} disabled={disabled} type={type} onClick={onClick}>
			{children || text}
		</button>
	);
});