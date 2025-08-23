import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { News, NewsState } from './types';

const initialState: NewsState = {
	error: null,
	isLoading: false,
	items: [],
};

export const newsSlice = createSlice({
	initialState,
	name: 'news',
	reducers: {
		addNews: (state, action: PayloadAction<News>) => {
			state.items.unshift(action.payload);
		},
		clearError: (state) => {
			state.error = null;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setNews: (state, action: PayloadAction<News[]>) => {
			state.items = action.payload;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { setLoading, setNews, addNews, setError, clearError } = newsSlice.actions;
export default newsSlice.reducer;