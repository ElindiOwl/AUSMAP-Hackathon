import { type ChangeEvent, useCallback, useState } from 'react';
import { type InputType } from 'shared/ui';

type ValidationRule = {
    test: (value: string) => boolean;
    message: string;
}

type ValidationRules = {
    required?: ValidationRule | boolean;
    email?: ValidationRule | boolean;
    minLength?: { value: number; message?: string };
    maxLength?: { value: number; message?: string };
    pattern?: { value: RegExp; message?: string };
    custom?: ValidationRule;
}

type ValidatorProps = {
    rules: ValidationRules;
    initialValue?: string;
}

type ValidatorReturn = {
    value: string;
    error: string | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    validate: () => boolean;
    reset: () => void;
}

export const defaultValidationMessages = {
	email: 'Please enter a valid email address',
	maxLength: (max: number) => `Cannot exceed ${max} characters`,
	minLength: (min: number) => `Must be at least ${min} characters`,
	pattern: 'Invalid format',
	required: 'This field is required'
};

export const defaultValidationRules: Record<string, ValidationRule> = {
	email: {
		message: defaultValidationMessages.email,
		test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
	},
	required: {
		message: defaultValidationMessages.required,
		test: (value) => !!value.trim()
	}
};

export const useValidator = ({ rules, initialValue = '' }: ValidatorProps): ValidatorReturn => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState<string | undefined>(undefined);

	const validateValue = useCallback((valueToValidate: string): string | undefined => {
		if (rules.required) {
			const rule = typeof rules.required === 'boolean'
				? defaultValidationRules.required
				: rules.required;

			if (!rule.test(valueToValidate)) {
				return rule.message;
			}
		}

		if (rules.email && valueToValidate) {
			const rule = typeof rules.email === 'boolean'
				? defaultValidationRules.email
				: rules.email;

			if (!rule.test(valueToValidate)) {
				return rule.message;
			}
		}

		if (rules.minLength && valueToValidate.length < rules.minLength.value) {
			return rules.minLength.message || defaultValidationMessages.minLength(rules.minLength.value);
		}

		if (rules.maxLength && valueToValidate.length > rules.maxLength.value) {
			return rules.maxLength.message || defaultValidationMessages.maxLength(rules.maxLength.value);
		}

		if (rules.pattern && valueToValidate && !rules.pattern.value.test(valueToValidate)) {
			return rules.pattern.message || defaultValidationMessages.pattern;
		}

		if (rules.custom && valueToValidate && !rules.custom.test(valueToValidate)) {
			return rules.custom.message;
		}

		return undefined;
	}, [rules]);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		setError(validateValue(newValue));
	}, [validateValue]);

	const validate = useCallback((): boolean => {
		const validationError = validateValue(value);
		setError(validationError);
		return !validationError;
	}, [value, validateValue]);

	const reset = useCallback(() => {
		setValue(initialValue);
		setError(undefined);
	}, [initialValue]);

	return {
		error,
		onChange,
		reset,
		validate,
		value
	};
};

export const createTypeValidator = (type: InputType): ValidationRules => {
	switch (type) {
	case 'email':
		return { email: true };
	case 'tel':
		return {
			pattern: {
				message: 'Please enter a valid phone number',
				value: /^\+?[0-9]{10,15}$/
			}
		};
	case 'password':
		return {
			minLength: { message: 'Password must be at least 8 characters', value: 8 },
			pattern: {
				message: 'Password must contain uppercase, lowercase, and number',
				value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
			}
		};
	default:
		return {};
	}
};

export const withValidator = (
	value: string,
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
	validationRules?: ValidationRules
) => {
	const { value: controlledValue, error, onChange: validatedOnChange, validate } =
        useValidator({ initialValue: value, rules: validationRules || {} });

	return {
		onChange: validatedOnChange,
		properties: { error },
		validate,
		value: controlledValue
	};
};