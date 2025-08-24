import { NewsList } from 'features/NewsList';
import { NewsletterSignup } from 'features/NewsletterSignup';
import { BackgroundSection } from 'shared/ui';
import { water2 } from 'shared/assets';

import styles from './NewsletterSection.module.scss';

export const NewsletterSection = () => {
	return (
		<BackgroundSection
			backgroundImage={water2}
			childrenContainerClassName={styles.newsletterSection__content}
			containerClassName={styles.newsletterSection}
			overlayClassName={styles.newsletterSection__overlay}
		>
			<NewsList/>
			<NewsletterSignup/>
		</BackgroundSection>
	);
};