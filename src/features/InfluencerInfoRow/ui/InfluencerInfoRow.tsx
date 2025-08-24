import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegularButton, Slider } from 'shared/ui';
import { ArrowSVG } from 'shared/assets';
import { InfluencerCard, setInfluencers } from 'entities/influencer';

import styles from './InfluencerInfoRow.module.scss';

const mockInfluencersData = [
	{
		id: '1',
		imageUrl: undefined,
		impact: 'Leading ocean conservation initiatives with 500K+ social media following, raising awareness about microplastic pollution through engaging content.',
		isVerified: true,
		name: 'Dr. Sarah Johnson',
		socialLinks: {
			instagram: 'https://instagram.com/oceanadvocate',
			linkedin: 'https://linkedin.com/in/sarahjohnson',
			twitter: 'https://twitter.com/drsarahjohnson'
		},
		title: 'Environmental Advocate & Marine Researcher'
	},
	{
		id: '2',
		imageUrl: undefined,
		impact: 'Educating millions about environmental issues through viral educational content, partnering with major brands for sustainable product promotion.',
		isVerified: true,
		name: 'Marcus Chen',
		socialLinks: {
			instagram: 'https://instagram.com/sustainableliving',
			linkedin: 'https://linkedin.com/in/marcuschen',
			twitter: 'https://twitter.com/marcuschen'
		},
		title: 'Sustainability Influencer & Content Creator'
	},
	{
		id: '3',
		imageUrl: undefined,
		impact: 'Inspiring climate action through powerful storytelling, collaborating with AUSMAP to amplify research findings to broader audiences.',
		isVerified: true,
		name: 'Elena Rodriguez',
		socialLinks: {
			linkedin: 'https://linkedin.com/in/elenarodriguez',
			twitter: 'https://twitter.com/elenarodriguez'
		},
		title: 'Climate Activist & Public Speaker'
	}
];

export const InfluencerInfoRow = () => {
	const dispatch = useDispatch();
	const influencers = useSelector((state: any) => state.influencer.items);

	useEffect(() => {
		dispatch(setInfluencers(mockInfluencersData));
	}, [dispatch]);

	return (
		<div className={styles.infoRowSlider}>
			<Slider
				button={<RegularButton buttonStyle={styles.slider__controls}><ArrowSVG/></RegularButton>}
				buttonsPosition="bottom"
				containerStyle={styles.slider__container}
				sliderStyle={styles.slider__slider}
			>
				{influencers.map((influencer: any) => (
					<div key={influencer.id} className={styles.influencerItem}>
						<InfluencerCard influencer={influencer}/>
					</div>
				))}
			</Slider>
		</div>
	);
};
