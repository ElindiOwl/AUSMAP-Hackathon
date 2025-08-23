export const COLORS = {
	error: {
		100: '#fee2e2',
		200: '#fecaca',
		300: '#fca5a5',
		400: '#f87171',
		50: '#fef2f2',
		500: '#ef4444',
		600: '#dc2626',
		700: '#b91c1c',
		800: '#991b1b',
		900: '#7f1d1d',
	},
	primary: {
		100: '#dbeafe',
		200: '#bfdbfe',
		300: '#93c5fd',
		400: '#60a5fa',
		50: '#eff6ff',
		500: '#3b82f6',
		600: '#2563eb',
		700: '#1d4ed8',
		800: '#1e40af',
		900: '#1e3a8a',
	},
	secondary: {
		100: '#f1f5f9',
		200: '#e2e8f0',
		300: '#cbd5e1',
		400: '#94a3b8',
		50: '#f8fafc',
		500: '#64748b',
		600: '#475569',
		700: '#334155',
		800: '#1e293b',
		900: '#0f172a',
	},
	success: {
		100: '#d1fae5',
		200: '#a7f3d0',
		300: '#6ee7b7',
		400: '#34d399',
		50: '#ecfdf5',
		500: '#10b981',
		600: '#059669',
		700: '#047857',
		800: '#065f46',
		900: '#064e3b',
	},
	warning: {
		100: '#fef3c7',
		200: '#fde68a',
		300: '#fcd34d',
		400: '#fbbf24',
		50: '#fffbeb',
		500: '#f59e0b',
		600: '#d97706',
		700: '#b45309',
		800: '#92400e',
		900: '#78350f',
	},
} as const;

export const BREAKPOINTS = {
	'2xl': '1536px',
	lg: '1024px',
	md: '768px',
	sm: '640px',
	xl: '1280px',
	xs: '320px',
} as const;

export const MEDIA_QUERIES = {
	desktop: `(min-width: ${BREAKPOINTS.lg})`,
	mobile: `(max-width: ${BREAKPOINTS.md})`,
	tablet: `(min-width: ${BREAKPOINTS.md}) and (max-width: ${BREAKPOINTS.lg})`,
} as const;

export const Z_INDEX = {
	dropdown: 1000,
	fixed: 1030,
	modal: 1040,
	popover: 1050,
	sticky: 1020,
	toast: 1070,
	tooltip: 1060,
} as const;

export const API_ENDPOINTS = {
	base: process.env.NODE_ENV === 'production'
		? 'https://api.ausmap.org'
		: 'http://localhost:3001',
	comments: '/api/comments',
	influencers: '/api/influencers',
	news: '/api/news',
	reports: '/api/reports',
	researchers: '/api/researchers',
	volunteers: '/api/volunteers',
} as const;

export const ROUTES = {
	about: '/about',
	contact: '/contact',
	contribution: '/contribution',
	donating: '/donating',
	home: '/',
	influencing: '/influencing',
	news: '/news',
	organization: '/organization',
	participation: '/participation',
	problem: '/problem',
	reports: '/reports',
	research: '/research',
	volunteering: '/volunteering',
} as const;

export const PAGINATION = {
	defaultLimit: 12,
	maxLimit: 100,
} as const;

export const ANIMATION = {
	duration: {
		fast: 150,
		normal: 300,
		slow: 500,
	},
	easing: {
		ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
		easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
		easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
		easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
	},
} as const;

export const STORAGE_KEYS = {
	preferences: 'ausmap_preferences',
	theme: 'ausmap_theme',
	user: 'ausmap_user',
} as const;