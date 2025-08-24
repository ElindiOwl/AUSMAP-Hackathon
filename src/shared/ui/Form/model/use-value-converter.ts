import { useCallback } from 'react';

export type ValueDefinition = 'string' | 'number' | 'boolean' | 'date' | 'json';
export type ValueType = string | number | boolean | Date | object | null;

export const useValueConverter = () => {
	const convertToString = useCallback((value: ValueType): string => {
		if (value === null || value === undefined) return '';

		switch (typeof value) {
		case 'boolean':
			return value.toString();
		case 'object':
			if (value instanceof Date) return value.toISOString().split('T')[0];
			return JSON.stringify(value);
		default:
			return String(value);
		}
	}, []);

	const convertFromString = useCallback((value: string, type: ValueDefinition = 'string'): ValueType => {
		if (!value) return null;

		switch (type) {
		case 'number':
			return Number(value) || null;
		case 'boolean':
			return value === 'true';
		case 'date':
			return new Date(value);
		case 'json':
			try {
				return JSON.parse(value);
			} catch {
				return value;
			}
		default:
			return value;
		}
	}, []);

	return {
		convertFromString,
		convertToString,
	};
};