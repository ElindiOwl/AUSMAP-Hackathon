import { Heading, Text } from 'shared/ui';

import type { News } from '../../model/types';

import styles from './NewsCard.module.scss';

interface NewsCardProps {
    news: News;
    onClick?: () => void;
}

export const NewsCard = ({ news, onClick }: NewsCardProps) => {
	const handleClick = () => {
		onClick?.();
	};

	return (
		<article className={styles.newsCard} onClick={handleClick}>
			{news.imageUrl && (
				<img
					alt={news.title}
					className={styles.newsCard__image}
					src={news.imageUrl}
				/>
			)}
			<div className={styles.newsCard__content}>
				<Heading className={styles.newsCard__title} level="h3">
					{news.title}
				</Heading>
				<Text className={styles.newsCard__excerpt}>
					{news.content.substring(0, 100)}...
				</Text>
				<div className={styles.newsCard__meta}>
					<time className={styles.newsCard__date}>
						{new Date(news.publishedAt).toLocaleDateString()}
					</time>
					{news.author && (
						<span className={styles.newsCard__author}>by {news.author}</span>
					)}
				</div>
			</div>
		</article>
	);
};