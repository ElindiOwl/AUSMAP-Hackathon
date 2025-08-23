import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TeamComment, TeamCommentState } from './types';

const initialState: TeamCommentState = {
	error: null,
	isLoading: false,
	items: [],
};

export const teamCommentSlice = createSlice({
	initialState,
	name: 'teamComment',
	reducers: {
		addTeamComment: (state, action: PayloadAction<TeamComment>) => {
			state.items.unshift(action.payload);
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setTeamComments: (state, action: PayloadAction<TeamComment[]>) => {
			state.items = action.payload;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { setLoading, setTeamComments, addTeamComment, setError } = teamCommentSlice.actions;
export default teamCommentSlice.reducer;