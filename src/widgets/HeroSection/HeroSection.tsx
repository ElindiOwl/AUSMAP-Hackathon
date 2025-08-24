import { Heading } from 'shared/ui';

import styles from './HeroSection.module.scss';

export const HeroSection = () => {
	return (
		<div className={styles.heroSection}>
			<div className={styles.heroSection__content}>
				<div className={styles.heroSection__titleSection}>
					<Heading className={styles.heroSection__subtitle} level="h3">
                        NATIONAL CITIZEN SCIENCE PROJECT
					</Heading>
					<Heading className={styles.heroSection__title} level="h1">
                        AUSTRALIAN MICROPLASTIC ASSESSMENT PROJECT
					</Heading>
				</div>
			</div>
		</div>
	);
};