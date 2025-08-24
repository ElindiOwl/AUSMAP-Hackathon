import { Heading } from 'shared/ui';

import styles from './ContributeCardsSection.module.scss';

export const ContributeCardsSection = () => {
	return (
		<section className={styles.contributeCards}>
			<div className={styles.contributeCards__card}>
				<Heading className={styles.contributeCards__cardTitle} level="h3">
					AUSMAP team
				</Heading>
			</div>
			<div className={styles.contributeCards__card}>
				<Heading className={styles.contributeCards__cardTitle} level="h3">
					Partners & collaborators
				</Heading>
			</div>
			<div className={styles.contributeCards__card}>
				<Heading className={styles.contributeCards__cardTitle} level="h3">
					Testimonials
				</Heading>
			</div>
		</section>
	);
};