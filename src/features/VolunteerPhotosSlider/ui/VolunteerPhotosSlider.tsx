import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { RegularButton, Slider } from 'shared/ui';
import { ArrowSVG } from 'shared/assets';
import { setVolunteers, VolunteerCard } from 'entities/volunteer';

import styles from './VolunteerPhotosSlider.module.scss';

const mockVolunteersData = [
	{
		contribution: 'Beach sampling and data collection across Sydney harbors',
		id: '1',
		isActive: true,
		joinedAt: '2023-03-15T00:00:00Z',
		location: 'Sydney, NSW',
		name: 'Alex Thompson',
		role: 'Citizen Scientist',
		skills: ['sampling', 'data collection', 'photography']
	},
	{
		contribution: 'Organizing volunteer events and community outreach programs',
		id: '2',
		isActive: true,
		joinedAt: '2023-01-10T00:00:00Z',
		location: 'Melbourne, VIC',
		name: 'Maria Rodriguez',
		role: 'Community Coordinator',
		skills: ['community outreach', 'event planning', 'education']
	},
	{
		contribution: 'Laboratory analysis and sample processing',
		id: '3',
		isActive: true,
		joinedAt: '2023-06-20T00:00:00Z',
		location: 'Brisbane, QLD',
		name: 'David Kim',
		role: 'Research Assistant',
		skills: ['lab analysis', 'sample processing', 'research']
	},
	{
		contribution: 'Educational workshops and school presentations',
		id: '4',
		isActive: true,
		joinedAt: '2023-02-28T00:00:00Z',
		location: 'Perth, WA',
		name: 'Sophie Wilson',
		role: 'Environmental Educator',
		skills: ['education', 'public speaking', 'curriculum development']
	}
];

export const VolunteerPhotosSlider = () => {
	const dispatch = useAppDispatch();
	const volunteers = useAppSelector((state) => state.volunteer.items);

	useEffect(() => {
		dispatch(setVolunteers(mockVolunteersData));
	}, [dispatch]);

	return (
		<div className={styles.volunteerPhotosSlider}>
			<Slider
				button={<RegularButton buttonStyle={styles.slider__controls}><ArrowSVG/></RegularButton>}
				buttonsPosition="bottom"
				containerStyle={styles.slider__container}
				sliderStyle={styles.slider__slider}
			>
				{volunteers.map((volunteer) => (
					<div key={volunteer.id} className={styles.volunteerItem}>
						<VolunteerCard volunteer={volunteer}/>
					</div>
				))}
			</Slider>
		</div>
	);
};
