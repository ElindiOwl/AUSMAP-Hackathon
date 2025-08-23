export const ENV = {
	API_BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:3001',
	APP_NAME: 'AUSMAP',
	APP_VERSION: '1.0.0',
	NODE_ENV: process.env.NODE_ENV || 'development',
} as const;

export const isDevelopment = ENV.NODE_ENV === 'development';
export const isProduction = ENV.NODE_ENV === 'production';
export const isTest = ENV.NODE_ENV === 'test';

export const API_CONFIG = {
	baseURL: ENV.API_BASE_URL,
	retries: 3,
	timeout: 10000,
} as const; 