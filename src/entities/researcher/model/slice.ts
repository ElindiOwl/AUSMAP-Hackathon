import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Researcher, ResearcherState } from './types';

const initialState: ResearcherState = {
	error: null,
	isLoading: false,
	items: [],
};

export const researcherSlice = createSlice({
	initialState,
	name: 'researcher',
	reducers: {
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setResearchers: (state, action: PayloadAction<Researcher[]>) => {
			state.items = action.payload;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { setLoading, setResearchers, setError } = researcherSlice.actions;
export default researcherSlice.reducer;