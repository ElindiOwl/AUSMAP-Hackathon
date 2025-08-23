export interface BaseEntity {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface LoadingState {
    isLoading: boolean;
    error: string | null;
}

export interface PaginationParams {
    page: number;
    limit: number;
}

export interface SortParams {
    field: string;
    order: 'asc' | 'desc';
}

export interface FilterParams {
    search?: string;
    dateFrom?: string;
    dateTo?: string;
    status?: string;
}

export interface APIResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    total?: number;
}

export interface NavigationItem {
    path: string;
    label: string;
    icon?: string;
    children?: NavigationItem[];
}

export interface IconSVGProps {
    bgStyle?: string;
    iconStyle?: string;
}

export interface SocialLinks {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'researcher' | 'volunteer' | 'viewer';
    avatar?: string;
    isActive: boolean;
}

export type ThemeMode = 'light' | 'dark';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export type AlertType = 'success' | 'error' | 'warning' | 'info';