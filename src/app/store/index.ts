import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from 'entities/news';
import { reportSlice } from 'entities/report';
import { volunteerSlice } from 'entities/volunteer';
import { influencerSlice } from 'entities/influencer';
import { researcherSlice } from 'entities/researcher';
import { teamCommentSlice } from 'entities/team-comment';
 
export const store = configureStore({
	reducer: {
		influencer: influencerSlice.reducer,
		news: newsSlice.reducer,
		report: reportSlice.reducer,
		researcher: researcherSlice.reducer,
		teamComment: teamCommentSlice.reducer,
		volunteer: volunteerSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;