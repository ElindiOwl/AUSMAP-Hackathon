import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from 'shared/ui/Slider';
import { RegularButton } from 'shared/ui/Buttons/Regular-Button';
import { ArrowSVG } from 'shared/assets/svg/Arrow-SVG';
import { ResearcherCard, setResearchers } from 'entities/researcher';

import styles from './ResearchPhotosRow.module.scss';

const mockResearchersData = [
	{
		contribution: 'Developing innovative methods for detecting and analyzing microplastic particles in marine environments, leading to breakthrough discoveries.',
		id: '1',
		imageUrl: undefined,
		institution: 'Australian Marine Science Institute',
		isActive: true,
		name: 'Dr. Michael Thompson',
		publications: 23,
		specialization: 'Marine Microplastic Analysis'
	},
	{
		contribution: 'Pioneering research on chemical composition of microplastics and their environmental impact across Australian coastal regions.',
		id: '2',
		imageUrl: undefined,
		institution: 'University of Melbourne',
		isActive: true,
		name: 'Prof. Lisa Chen',
		publications: 41,
		specialization: 'Environmental Chemistry'
	},
	{
		contribution: 'Creating predictive models for microplastic distribution patterns, helping understand pollution spread and concentration zones.',
		id: '3',
		imageUrl: undefined,
		institution: 'CSIRO Marine Labs',
		isActive: true,
		name: 'Dr. James Rodriguez',
		publications: 18,
		specialization: 'Ocean Current Modeling'
	},
	{
		contribution: 'Studying the effects of microplastic pollution on marine life, documenting behavioral and physiological changes in affected species.',
		id: '4',
		imageUrl: undefined,
		institution: 'James Cook University',
		isActive: true,
		name: 'Dr. Emma Wilson',
		publications: 31,
		specialization: 'Marine Biology & Ecosystem Impact'
	}
];

const ResearchPhotosRow = () => {
	const dispatch = useDispatch();
	const researchers = useSelector((state: any) => state.researcher.items);

	useEffect(() => {
		dispatch(setResearchers(mockResearchersData));
	}, [dispatch]);

	return (
		<div className={styles.photosRow}>
			<Slider
				button={<RegularButton buttonStyle={styles.slider__controls}><ArrowSVG/></RegularButton>}
				buttonsPosition="bottom"
				containerStyle={styles.slider__container}
				sliderStyle={styles.slider__slider}
			>
				{researchers.map((researcher: any) => (
					<div key={researcher.id} className={styles.researcherItem}>
						<ResearcherCard researcher={researcher}/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ResearchPhotosRow;
