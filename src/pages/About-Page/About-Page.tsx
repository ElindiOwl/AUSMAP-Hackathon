import styles from './About-Page.module.scss';

import {
	DetailSections,
	HowToContributeSection,
	MissionSection,
	ProjectLeadersSection,
	TeamPartnersTestimonialsSection,
	VisionSection,
	WhatIsAusmapSection
} from '@/widgets';


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function loader() {
	return {};
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function AboutPage() {
	return (
		<div className={styles.aboutPage}>
			<WhatIsAusmapSection/>
			<DetailSections/>
			<div className={styles.aboutPage__visionMissionBlock}>
				<VisionSection/>
				<MissionSection/>
			</div>
			<TeamPartnersTestimonialsSection/>
			<ProjectLeadersSection/>
			<HowToContributeSection/>
		</div>
	);
}