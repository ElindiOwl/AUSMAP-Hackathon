export type { News, NewsState, NewsFilters } from './model/types';
export { newsSlice, setLoading, setNews, addNews, setError, clearError } from './model/slice';
export {
	selectNewsItems,
	selectNewsLoading,
	selectNewsError,
	selectLatestNews,
	selectNewsByCategory
} from './model/selectors';
export { NewsCard } from './ui/NewsCard/NewsCard';