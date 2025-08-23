export interface News {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    author?: string;
    category?: string;
    imageUrl?: string;
}

export interface NewsState {
    items: News[];
    isLoading: boolean;
    error: string | null;
}

export interface NewsFilters {
    category?: string;
    dateFrom?: string;
    dateTo?: string;
}