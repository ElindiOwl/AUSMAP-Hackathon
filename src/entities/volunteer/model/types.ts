export interface Volunteer {
    id: string;
    name: string;
    role: string;
    location: string;
    joinedAt: string;
    contribution: string;
    imageUrl?: string;
    skills: string[];
    isActive: boolean;
}

export interface VolunteerState {
    items: Volunteer[];
    isLoading: boolean;
    error: string | null;
    selectedVolunteer: Volunteer | null;
}

export interface VolunteerFilters {
    location?: string;
    skills?: string[];
    isActive?: boolean;
}