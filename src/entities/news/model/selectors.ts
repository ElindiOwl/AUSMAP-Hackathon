import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

import type { News } from './types';

export const selectNewsItems = (state: RootState) => state.news.items;
export const selectNewsLoading = (state: RootState) => state.news.isLoading;
export const selectNewsError = (state: RootState) => state.news.error;

export const selectLatestNews = createSelector(
	[selectNewsItems, (state: RootState, limit: number = 5) => limit],
	(items, limit) => items.slice(0, limit)
);

export const selectNewsByCategory = createSelector(
	[selectNewsItems, (state: RootState, category: string) => category],
	(items, category) => items.filter((news: News) => news.category === category)
);