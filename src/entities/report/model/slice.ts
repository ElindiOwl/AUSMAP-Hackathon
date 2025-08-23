import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Report, ReportState } from './types';

const initialState: ReportState = {
	error: null,
	isLoading: false,
	items: [],
	selectedReport: null,
};

export const reportSlice = createSlice({
	initialState,
	name: 'report',
	reducers: {
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setReports: (state, action: PayloadAction<Report[]>) => {
			state.items = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		setSelectedReport: (state, action: PayloadAction<Report | null>) => {
			state.selectedReport = action.payload;
		},
	},
});

export const { setLoading, setReports, setSelectedReport, setError } = reportSlice.actions;
export default reportSlice.reducer;