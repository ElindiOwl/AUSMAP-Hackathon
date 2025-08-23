import { index, layout, type RouteConfig } from '@react-router/dev/routes';

export default [
	layout('./pages/Project-Wrapper/Project-Wrapper.tsx', [
		index('./routes/home.tsx'),
	]),
] satisfies RouteConfig;