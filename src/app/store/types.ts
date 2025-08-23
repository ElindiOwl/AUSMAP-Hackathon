import type { newsSlice } from 'entities/news';
import type { reportSlice } from 'entities/report';

export interface RootState {
    news: ReturnType<typeof newsSlice.reducer>;
    report: ReturnType<typeof reportSlice.reducer>;
}