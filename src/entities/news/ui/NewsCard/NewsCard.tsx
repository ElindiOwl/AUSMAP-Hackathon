import { Heading } from 'shared/ui';
import { beach } from 'shared/assets';

import type { News } from '../../model/types';

import styles from './NewsCard.module.scss';

interface NewsCardProps {
    news: News;
    onClick?: () => void;
}

const estimateReadTime = (text: string): string => {
	const words = text?.trim()?.split(/\s+/).length || 0;
	const minutes = Math.max(1, Math.round(words / 200));
	return `${minutes} min read`;
};

const pseudoViews = (seed: string): number => {
	let hash = 0;
	for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	return 20 + (hash % 120);
};

export const NewsCard = ({ news, onClick }: NewsCardProps) => {
	const handleClick = () => {
		onClick?.();
	};

	const image = (news as any).imageUrl || beach;
	const readTime = estimateReadTime(news.content || '');
	const views = pseudoViews(news.id);
	const author = news.author || 'AUSMAP';
	const authorInitial = author.charAt(0).toUpperCase();
	const likeStatusId = `like-status-${news.id}`;

	return (
		<article className={styles.newsCard} onClick={handleClick}>
			<div className={styles.newsCard__imageWrapper}>
				<img alt={news.title} className={styles.newsCard__image} src={image}/>
			</div>
			<div className={styles.newsCard__content}>
				<header className={styles.newsCard__header}>
					<div className={styles.newsCard__publisher}>
						<div aria-hidden="true" className={styles.newsCard__avatar}>{authorInitial}</div>
						<div className={styles.newsCard__publisherCol}>
							<span className={styles.newsCard__publisherName}>{author}</span>
							<div className={styles.newsCard__subMeta}>
								<time className={styles.newsCard__date}>
									{new Date(news.publishedAt).toLocaleString(undefined, {
										day: 'numeric',
										month: 'short'
									})}
								</time>
								<span className={styles.newsCard__dot}/>
								<span className={styles.newsCard__readTime}>{readTime}</span>
							</div>
						</div>
					</div>
					<button aria-label="More actions" className={styles.newsCard__moreButton} type="button">
						<span aria-hidden="true" className={styles.newsCard__kebab}/>
					</button>
				</header>

				<Heading className={styles.newsCard__title} level="h3">{news.title}</Heading>

				<div className={styles.newsCard__spacer}/>
				<hr className={styles.newsCard__divider}/>
				<footer className={styles.newsCard__footer}>
					<div className={styles.newsCard__views}>
						<svg aria-hidden="true" className={styles.newsCard__eyeIcon} viewBox="0 0 24 24">
							<path
								d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
						</svg>
						<span>{views}</span>
					</div>
					<button aria-label="Like" className={styles.newsCard__likeButton} type="button">
						<span aria-live="polite" className={styles.srOnly}
							id={likeStatusId}>Post not marked as liked</span>
						<span aria-hidden="true" className={styles.newsCard__likeCount}>
							<span className={styles.newsCard__likeIcon}>
								<svg aria-hidden="true" className={styles.newsCard__heartIcon} height="19"
									viewBox="0 0 19 19" width="19">
									<path
										d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"/>
								</svg>
							</span>
						</span>
					</button>
				</footer>
			</div>
		</article>
	);
};