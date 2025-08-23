import type { RootState } from 'app/store/types';

export const selectNewsItems = (state: RootState) => state.news.items;
export const selectNewsLoading = (state: RootState) => state.news.isLoading;
export const selectNewsError = (state: RootState) => state.news.error;

export const selectLatestNews = (state: RootState, limit: number = 5) =>
	state.news.items.slice(0, limit);

export const selectNewsByCategory = (state: RootState, category: string) =>
	state.news.items.filter(news => news.category === category); 