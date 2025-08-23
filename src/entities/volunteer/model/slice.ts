import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Volunteer, VolunteerState } from './types';

const initialState: VolunteerState = {
	error: null,
	isLoading: false,
	items: [],
	selectedVolunteer: null,
};

export const volunteerSlice = createSlice({
	initialState,
	name: 'volunteer',
	reducers: {
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setSelectedVolunteer: (state, action: PayloadAction<Volunteer | null>) => {
			state.selectedVolunteer = action.payload;
		},
		setVolunteers: (state, action: PayloadAction<Volunteer[]>) => {
			state.items = action.payload;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { setLoading, setVolunteers, setSelectedVolunteer, setError } = volunteerSlice.actions;
export default volunteerSlice.reducer;