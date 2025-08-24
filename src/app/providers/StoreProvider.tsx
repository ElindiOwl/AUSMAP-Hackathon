import { Provider } from 'react-redux';
import type { ReactNode } from 'react';

import { store } from '../store';

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
	<Provider store={store}>
		{children}
	</Provider>
);