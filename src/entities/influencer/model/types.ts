export interface Influencer {
    id: string;
    name: string;
    title: string;
    impact: string;
    imageUrl?: string;
    socialLinks: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
    isVerified: boolean;
}

export interface InfluencerState {
    items: Influencer[];
    isLoading: boolean;
    error: string | null;
}