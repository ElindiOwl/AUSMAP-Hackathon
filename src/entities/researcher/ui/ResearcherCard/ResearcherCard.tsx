import type { FC } from 'react';
import { Heading, Text } from 'shared/ui';

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
				<Heading className={styles.name} level="h3">
					{researcher.name}
				</Heading>
				<Text className={styles.specialization}>
					{researcher.specialization}
				</Text>
				{researcher.institution && (
					<Text className={styles.institution}>
						{researcher.institution}
					</Text>
				)}
				<Text className={styles.contribution}>
					{researcher.contribution}
				</Text>

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