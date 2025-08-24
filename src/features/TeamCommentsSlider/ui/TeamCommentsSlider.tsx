import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { RegularButton, Slider } from 'shared/ui';
import { ArrowSVG } from 'shared/assets';
import { setTeamComments, TeamCommentCard } from 'entities/team-comment';

import styles from './TeamCommentsSlider.module.scss';

const mockCommentsData = [
	{
		author: 'Dr. Emma Watson',
		comment: 'Working with AUSMAP has been incredibly rewarding. The collaborative approach and cutting-edge research methods have allowed us to make significant progress in understanding microplastic pollution.',
		createdAt: '2024-01-20T00:00:00Z',
		id: '1',
		isVerified: true,
		rating: 5,
		role: 'Marine Biologist'
	},
	{
		author: 'James Mitchell',
		comment: 'The impact we are making together is truly inspiring. Every day brings new discoveries and opportunities to contribute to environmental protection.',
		createdAt: '2024-01-15T00:00:00Z',
		id: '2',
		isVerified: true,
		rating: 5,
		role: 'Research Coordinator'
	},
	{
		author: 'Sarah Chen',
		comment: 'The team collaboration and shared passion for environmental research creates an amazing working environment. Proud to be part of this important mission.',
		createdAt: '2024-01-10T00:00:00Z',
		id: '3',
		isVerified: true,
		rating: 5,
		role: 'Data Analyst'
	}
];

export const TeamCommentsSlider = () => {
	const dispatch = useAppDispatch();
	const comments = useAppSelector((state) => state.teamComment.items);

	useEffect(() => {
		dispatch(setTeamComments(mockCommentsData));
	}, [dispatch]);

	return (
		<div className={styles.teamCommentsSlider}>
			<Slider
				button={
					<RegularButton buttonStyle={styles.slider__controls}>
						<ArrowSVG/>
					</RegularButton>
				}
				buttonsPosition="bottom"
				containerStyle={styles.slider__container}
				sliderStyle={styles.slider__slider}
			>
				{comments.map((comment) => (
					<div key={comment.id} className={styles.commentItem}>
						<TeamCommentCard comment={comment}/>
					</div>
				))}
			</Slider>
		</div>
	);
};
