import {BackgroundSection, Heading} from 'shared/ui';
import {beach, waterbubbles, waterstains} from 'shared/assets';

import styles from './TeamPartnersTestimonialsSection.module.scss';

export const TeamPartnersTestimonialsSection = () => {
	return (
		<section className={styles.teamPartnersTestimonials}>
			<BackgroundSection
				backgroundImage={beach}
				childrenContainerClassName={styles.teamPartnersTestimonials__content}
				containerClassName={styles.teamPartnersTestimonials__bg}
				overlayClassName={styles.teamPartnersTestimonials__overlay}
			>
				<Heading className={styles.teamPartnersTestimonials__cardTitle} level="h3">
					AUSMAP team
				</Heading>
			</BackgroundSection>

			<BackgroundSection
				backgroundImage={waterstains}
				childrenContainerClassName={styles.teamPartnersTestimonials__content}
				containerClassName={styles.teamPartnersTestimonials__bg}
				overlayClassName={styles.teamPartnersTestimonials__overlay}
			>
				<Heading className={styles.teamPartnersTestimonials__cardTitle} level="h3">
					Partners & collaborators
				</Heading>
			</BackgroundSection>

			<BackgroundSection
				backgroundImage={waterbubbles}
				childrenContainerClassName={styles.teamPartnersTestimonials__content}
				containerClassName={styles.teamPartnersTestimonials__bg}
				overlayClassName={styles.teamPartnersTestimonials__overlay}
			>
				<Heading className={styles.teamPartnersTestimonials__cardTitle} level="h3">
					Testimonials
				</Heading>
			</BackgroundSection>
		</section>
	);
};