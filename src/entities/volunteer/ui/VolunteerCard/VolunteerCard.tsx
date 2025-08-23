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
			<h3 className={styles.volunteerCard__name}>{volunteer.name}</h3>
			<p className={styles.volunteerCard__role}>{volunteer.role}</p>
			<p className={styles.volunteerCard__contribution}>{volunteer.contribution}</p>
			<div className={styles.volunteerCard__meta}>
				<span className={styles.volunteerCard__location}>{volunteer.location}</span>
				<time className={styles.volunteerCard__joined}>
                    Since {new Date(volunteer.joinedAt).getFullYear()}
				</time>
			</div>
		</div>
	</article>
);