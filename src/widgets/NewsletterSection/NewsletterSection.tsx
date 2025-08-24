import { NewsList } from 'features/NewsList';
import { NewsletterSignup } from 'features/NewsletterSignup';
import { water2 } from 'shared/assets';

import styles from './NewsletterSection.module.scss';

export const NewsletterSection = () => {
	return (
		<div className={styles.newsletterSection} style={{ backgroundImage: `url(${water2})` }}>
			<NewsList/>
			<NewsletterSignup/>
		</div>
	);
};