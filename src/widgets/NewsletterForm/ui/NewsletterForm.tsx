import styles from './NewsletterForm.module.scss';

export const NewsletterForm = () => {
	return (
		<section className={styles.newsletterForm}>
			<form>
				<input className={styles.input} placeholder="Your email" type="email"/>
				<button className={styles.button} type="submit">Join newsletter</button>
			</form>
		</section>
	);
};