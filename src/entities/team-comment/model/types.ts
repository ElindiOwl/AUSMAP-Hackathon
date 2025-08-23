export interface TeamComment {
    id: string;
    author: string;
    role: string;
    comment: string;
    rating: number;
    createdAt: string;
    avatarUrl?: string;
    isVerified: boolean;
}

export interface TeamCommentState {
    items: TeamComment[];
    isLoading: boolean;
    error: string | null;
}

export interface TeamCommentFilters {
    role?: string;
    rating?: number;
    isVerified?: boolean;
}