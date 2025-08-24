import { SectionBlock } from 'shared/ui';

import styles from './About-Page.module.scss';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function loader() {
	return {};
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function AboutPage() {
	return (
		<div className={styles.aboutPage}>
			<SectionBlock className={styles.aboutPage__aboutBlock}>
                What is AUSMAP
			</SectionBlock>
			<div className={styles.aboutPage__visionMissionBlock}>
				<SectionBlock className={styles.aboutPage__card}>Vision</SectionBlock>
				<SectionBlock className={styles.aboutPage__card}>Mission</SectionBlock>
			</div>
			<SectionBlock className={styles.aboutPage__sectionBar}>
                About Project leaders
			</SectionBlock>
			<div className={styles.aboutPage__leadersGrid}>
				<div className={styles.aboutPage__leader}>Mapping hotspots</div>
				<div className={styles.aboutPage__leader}>Tracking sources</div>
				<div className={styles.aboutPage__goals}>Goals</div>
				<div className={styles.aboutPage__leader}>Engaging citizen scientists</div>
				<div className={styles.aboutPage__leader}>Sparking innovation</div>
			</div>
			<SectionBlock className={styles.aboutPage__goalsGrid}>
                How can <span className={styles.aboutPage__you}>YOU</span> contribute
			</SectionBlock>
			<div className={styles.aboutPage__partnersTestimonialsBlock}>
				<div className={styles.aboutPage__tile}>AUSMAP team</div>
				<div className={styles.aboutPage__tile}>Partners & collaborators</div>
				<div className={styles.aboutPage__tile}>Testimonials</div>
			</div>
		</div>
	)
}