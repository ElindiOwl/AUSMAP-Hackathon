export interface Researcher {
    id: string;
    name: string;
    specialization: string;
    contribution: string;
    institution?: string;
    imageUrl?: string;
    publications: number;
    isActive: boolean;
}

export interface ResearcherState {
    items: Researcher[];
    isLoading: boolean;
    error: string | null;
}