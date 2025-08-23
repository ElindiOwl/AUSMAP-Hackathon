import type { FC } from 'react';

import type { Researcher } from '../../model/types';

import styles from './ResearcherCard.module.scss';

interface ResearcherCardProps {
    researcher: Researcher;
}

export const ResearcherCard: FC<ResearcherCardProps> = ({ researcher }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				{researcher.imageUrl ? (
					<img
						alt={researcher.name}
						className={styles.image}
						src={researcher.imageUrl}
					/>
				) : (
					<div className={styles.placeholder}>
						{researcher.name.charAt(0)}
					</div>
				)}
				{researcher.isActive && (
					<div className={styles.activeBadge}>Active</div>
				)}
			</div>

			<div className={styles.content}>
				<h3 className={styles.name}>{researcher.name}</h3>
				<p className={styles.specialization}>{researcher.specialization}</p>
				{researcher.institution && (
					<p className={styles.institution}>{researcher.institution}</p>
				)}
				<p className={styles.contribution}>{researcher.contribution}</p>

				<div className={styles.stats}>
					<div className={styles.stat}>
						<span className={styles.statNumber}>{researcher.publications}</span>
						<span className={styles.statLabel}>Publications</span>
					</div>
				</div>
			</div>
		</div>
	);
};