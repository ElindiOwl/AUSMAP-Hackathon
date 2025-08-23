import type { FC } from 'react';

import type { Influencer } from '../../model/types';

import styles from './InfluencerCard.module.scss';

interface InfluencerCardProps {
    influencer: Influencer;
}

export const InfluencerCard: FC<InfluencerCardProps> = ({ influencer }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				{influencer.imageUrl ? (
					<img
						alt={influencer.name}
						className={styles.image}
						src={influencer.imageUrl}
					/>
				) : (
					<div className={styles.placeholder}>
						{influencer.name.charAt(0)}
					</div>
				)}
				{influencer.isVerified && (
					<div className={styles.verifiedBadge}>✓</div>
				)}
			</div>

			<div className={styles.content}>
				<h3 className={styles.name}>{influencer.name}</h3>
				<p className={styles.title}>{influencer.title}</p>
				<p className={styles.impact}>{influencer.impact}</p>

				<div className={styles.socialLinks}>
					{influencer.socialLinks.twitter && (
						<a className={styles.socialLink} href={influencer.socialLinks.twitter}>
                            Twitter
						</a>
					)}
					{influencer.socialLinks.linkedin && (
						<a className={styles.socialLink} href={influencer.socialLinks.linkedin}>
                            LinkedIn
						</a>
					)}
					{influencer.socialLinks.instagram && (
						<a className={styles.socialLink} href={influencer.socialLinks.instagram}>
                            Instagram
						</a>
					)}
				</div>
			</div>
		</div>
	);
};