import { Heading, Text } from 'shared/ui';

import type { TeamComment } from '../../model/types';

import styles from './TeamCommentCard.module.scss';

interface TeamCommentCardProps {
    comment: TeamComment;
    onClick?: () => void;
}

export const TeamCommentCard = ({ comment, onClick }: TeamCommentCardProps) => (
	<article className={styles.commentCard} onClick={onClick}>
		<div className={styles.commentCard__header}>
			{comment.avatarUrl && (
				<img
					alt={comment.author}
					className={styles.commentCard__avatar}
					src={comment.avatarUrl}
				/>
			)}
			<div className={styles.commentCard__authorInfo}>
				<Heading className={styles.commentCard__author} level="h4">
					{comment.author}
				</Heading>
				<span className={styles.commentCard__role}>{comment.role}</span>
			</div>
		</div>
		<Text className={styles.commentCard__text}>
			{comment.comment}
		</Text>
		<div className={styles.commentCard__meta}>
			<time className={styles.commentCard__date}>
				{new Date(comment.createdAt).toLocaleDateString()}
			</time>
			{comment.isVerified && (
				<span className={styles.commentCard__verified}>Verified</span>
			)}
		</div>
	</article>
);