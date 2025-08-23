import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
	layout('./pages/Project-Wrapper/Project-Wrapper.tsx', [
		index('./routes/home.tsx'),
		route('about', './pages/About-Page/About-Page.tsx'),
		route('problem', './pages/Problem-Page/Problem-Page.tsx'),
		route('contribution', './pages/Contribution-Page/Contribution-Page.tsx'),
		route('volunteering', './pages/Volunteering-Page/Volunteering-Page.tsx'),
		route('influencing', './pages/Influencing-Page/Influencing-Page.tsx'),
		route('donating', './pages/Donating-Page/Donating-Page.tsx'),
		route('research', './pages/Research-Page/Research-Page.tsx'),
	]),
] satisfies RouteConfig;