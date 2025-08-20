import {isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration,} from 'react-router';
import React from 'react';

import type {Route} from '.react-router/types/src/+types/root';

import './app/ui/Normalize.scss';
import './app/ui/App.scss';

export const links: Route.LinksFunction = () => [
	{href: 'https://fonts.googleapis.com', rel: 'preconnect'},
	{
		crossOrigin: 'anonymous',
		href: 'https://fonts.gstatic.com',
		rel: 'preconnect',
	},
	{
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
		rel: 'stylesheet',
	},
];

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function Layout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8"/>
				<meta content="width=device-width, initial-scale=1" name="viewport"/>
				<Meta/>
				<Links/>
			</head>
			<body>
				{children}
				<ScrollRestoration/>
				<Scripts/>
			</body>
		</html>
	);
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function App() {
	return <Outlet/>;
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
            error.status === 404
            	? 'The requested page could not be found.'
            	: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main style={{margin: '0 auto', maxWidth: '1200px', padding: '4rem 1rem 1rem'}}>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre style={{overflowX: 'auto', padding: '1rem', width: '100%'}}>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
