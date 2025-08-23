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
				<h4 className={styles.commentCard__author}>{comment.author}</h4>
				<span className={styles.commentCard__role}>{comment.role}</span>
			</div>
		</div>
		<p className={styles.commentCard__text}>{comment.comment}</p>
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