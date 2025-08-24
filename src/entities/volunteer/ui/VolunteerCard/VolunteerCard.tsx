import { Heading, Text } from 'shared/ui';

import type { Volunteer } from '../../model/types';

import styles from './VolunteerCard.module.scss';

interface VolunteerCardProps {
    volunteer: Volunteer;
    onClick?: () => void;
}

export const VolunteerCard = ({ volunteer, onClick }: VolunteerCardProps) => (
	<article className={styles.volunteerCard} onClick={onClick}>
		{volunteer.imageUrl && (
			<img
				alt={volunteer.name}
				className={styles.volunteerCard__image}
				src={volunteer.imageUrl}
			/>
		)}
		<div className={styles.volunteerCard__content}>
			<Heading className={styles.volunteerCard__name} level="h3">
				{volunteer.name}
			</Heading>
			<Text className={styles.volunteerCard__role}>
				{volunteer.role}
			</Text>
			<Text className={styles.volunteerCard__contribution}>
				{volunteer.contribution}
			</Text>
			<div className={styles.volunteerCard__meta}>
				<span className={styles.volunteerCard__location}>{volunteer.location}</span>
				<time className={styles.volunteerCard__joined}>
                    Since {new Date(volunteer.joinedAt).getFullYear()}
				</time>
			</div>
		</div>
	</article>
);