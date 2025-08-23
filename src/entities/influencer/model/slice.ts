import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Influencer, InfluencerState } from './types';

const initialState: InfluencerState = {
	error: null,
	isLoading: false,
	items: [],
};

export const influencerSlice = createSlice({
	initialState,
	name: 'influencer',
	reducers: {
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		setInfluencers: (state, action: PayloadAction<Influencer[]>) => {
			state.items = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setLoading, setInfluencers, setError } = influencerSlice.actions;
export default influencerSlice.reducer;