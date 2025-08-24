import { BackgroundSection, Heading, Text } from 'shared/ui';
import { forest, TIS } from 'shared/assets';

import styles from './ProjectLeadersSection.module.scss';

export const ProjectLeadersSection = () => {
	return (
		<BackgroundSection
			backgroundImage={forest}
			childrenContainerClassName={styles.projectLeadersSection__children}
			containerClassName={styles.projectLeadersSection}
			overlayClassName={styles.projectLeadersSection__overlay}
		>
			<div className={styles.projectLeadersSection__header}>
				<Heading className={styles.projectLeadersSection__title} level="h2">
                    About Project leaders
				</Heading>
				<Heading className={styles.projectLeadersSection__subtitle} level="h3">
                    TOTAL ENVIRONMENT CENTRE
				</Heading>
			</div>
			<div className={styles.projectLeadersSection__content}>
				<Text className={styles.projectLeadersSection__text}>
                    TEC is an independent not-for-profit organisation with over 40
                    years in environmental advocacy. We are dedicated to eliminating
                    plastic pollution and holding polluters to account. TEC is
                    providing Project Management for the key partners and
                    supporting the development of educational materials by expert
                    bodies through community consultation and participation.
				</Text>
				<img
					alt="Total Environment Centre Logo"
					className={styles.projectLeadersSection__logo}
					src={TIS}
				/>
			</div>
		</BackgroundSection>
	);
};