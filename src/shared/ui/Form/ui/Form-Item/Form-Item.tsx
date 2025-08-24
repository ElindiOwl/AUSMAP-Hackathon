import type { ChangeEvent, FC, ReactNode } from 'react';
import { memo, useMemo } from 'react';
import { cn } from 'shared/lib';

export type InputType = 'text' | 'email' | 'tel' | 'login' | 'password' | 'number' | 'date' | 'select' | 'textarea';

type FormItemProperties = {
    required?: boolean;
    disabled?: boolean;
    error?: string;
}

type SelectOption = {
    value: string;
    label: string;
}

interface FormItemStyles {
    itemContainerStyle?: string;
    labelStyle?: string;
    itemStyle?: string;
    selectStyle?: string;
    optionStyle?: string;
    textareaStyle?: string;
    inputStyle?: string;
    requiredStyle?: string;
    errorStyle?: string;
    disabledStyle?: string;
}

interface FormItemProps extends FormItemStyles {
    type: InputType;
    properties?: FormItemProperties;
    placeholder?: string;
    label?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    options?: SelectOption[];
    children?: ReactNode;
}

export const FormItem: FC<FormItemProps> = memo(({
	type,
	label = '',
	name,
	value,
	onChange,
	properties = {},
	options = [],
	placeholder = '',
	itemContainerStyle = '',
	labelStyle = '',
	itemStyle = '',
	selectStyle = '',
	optionStyle = '',
	textareaStyle = '',
	inputStyle = '',
	requiredStyle = '',
	errorStyle = '',
	disabledStyle = '',
	children,
}) => {
	const { required = false, disabled = false, error } = properties;

	const commonProps = useMemo(() => ({
		className: cn([
			required ? requiredStyle : '',
			disabled ? disabledStyle : '',
			error ? errorStyle : '',
		].filter(Boolean)),
		disabled,
		id: name,
		name,
		onChange,
		placeholder,
		required,
		value,
	}), [disabledStyle, disabled, errorStyle, error, name, onChange, placeholder, required, value]);

	return (
		<div className={itemContainerStyle}>
			{label && <label className={labelStyle} htmlFor={name}>{label}</label>}
			<div className={itemStyle}>
				{type === 'select' ? (
					<select {...commonProps} className={selectStyle}>
						{options.map(option => (
							<option key={option.value} className={optionStyle}
								value={option.value}>{option.label}</option>
						))}
					</select>
				) : type === 'textarea' ? (
					<textarea{...commonProps} className={textareaStyle} />
				) : (
					<input{...commonProps} className={inputStyle} type={type} />
				)}
				{children}
				{error && <span className={errorStyle}>{error}</span>}
			</div>
		</div>
	);
});