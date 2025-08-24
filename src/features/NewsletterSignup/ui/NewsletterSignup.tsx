import type { FormEvent } from 'react';
import { FormItem, Heading, RegularButton, Text, useValidator } from 'shared/ui';

import style from './NewsletterSignup.module.scss';

export const NewsletterSignup = () => {
	const firstNameValidator = useValidator({
		initialValue: '',
		rules: { required: true }
	});

	const lastNameValidator = useValidator({
		initialValue: '',
		rules: { required: true }
	});

	const emailValidator = useValidator({
		initialValue: '',
		rules: { email: true, required: true }
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const isFirstNameValid = firstNameValidator.validate();
		const isLastNameValid = lastNameValidator.validate();
		const isEmailValid = emailValidator.validate();

		if (isFirstNameValid && isLastNameValid && isEmailValid) {
			const submitData = {
				email: emailValidator.value,
				firstName: firstNameValidator.value,
				lastName: lastNameValidator.value
			};

			console.log('Newsletter signup:', submitData);

			firstNameValidator.reset();
			lastNameValidator.reset();
			emailValidator.reset();
		}
	};

	return (
		<section className={style.newsletterSignup}>
			<div className={style.newsletterSignup__content}>
				<Heading className={style.newsletterSignup__title} level="h2">
                    JOIN OUR NEWSLETTER!
				</Heading>
				<Text className={style.newsletterSignup__description}>
                    Be the first to hear about training days, the latest results from our data, research in
                    microplastics, and much more!
				</Text>
			</div>
			<form className={style.newsletterSignup__form} onSubmit={handleSubmit}>
				<FormItem
					errorStyle={style.newsletterSignup__error}
					inputStyle={style.newsletterSignup__input}
					name="firstName"
					placeholder="First Name"
					properties={{
						error: firstNameValidator.error,
						required: true
					}}
					type="text"
					value={firstNameValidator.value}
					onChange={firstNameValidator.onChange}
				/>
				<FormItem
					errorStyle={style.newsletterSignup__error}
					inputStyle={style.newsletterSignup__input}
					name="lastName"
					placeholder="Last Name"
					properties={{
						error: lastNameValidator.error,
						required: true
					}}
					type="text"
					value={lastNameValidator.value}
					onChange={lastNameValidator.onChange}
				/>
				<FormItem
					errorStyle={style.newsletterSignup__error}
					inputStyle={style.newsletterSignup__input}
					name="email"
					placeholder="Email"
					properties={{
						error: emailValidator.error,
						required: true
					}}
					type="email"
					value={emailValidator.value}
					onChange={emailValidator.onChange}
				/>
				<RegularButton
					buttonStyle={style.submitButton}
					type="submit"
				>
                    Subscribe!
				</RegularButton>
			</form>
		</section>
	);
};