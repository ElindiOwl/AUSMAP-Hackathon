export interface Report {
    id: string;
    title: string;
    reportNumber: number;
    summary: string;
    publishedAt: string;
    downloadUrl: string;
    fileSize?: string;
    category: 'microplastic' | 'research' | 'annual' | 'special';
}

export interface ReportState {
    items: Report[];
    isLoading: boolean;
    error: string | null;
    selectedReport: Report | null;
}

export interface ReportFilters {
    category?: string;
    year?: number;
}