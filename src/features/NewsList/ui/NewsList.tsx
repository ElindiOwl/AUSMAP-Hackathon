import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from 'shared/ui/Slider';
import { RegularButton } from 'shared/ui/Buttons/Regular-Button';
import { ArrowSVG } from 'shared/assets/svg/Arrow-SVG';
import { NewsCard, selectLatestNews, setNews } from 'entities/news';

import styles from './NewsList.module.scss';

const mockNewsData = [
	{
		author: 'Dr. Sarah Johnson',
		category: 'research',
		content: 'AUSMAP researchers have published groundbreaking findings on microplastic distribution in Australian waters.',
		id: '1',
		publishedAt: '2024-01-15T10:00:00Z',
		title: 'New Microplastic Research Published'
	},
	{
		author: 'AUSMAP Team',
		category: 'community',
		content: 'Join our growing network of citizen scientists helping to map plastic pollution across Australia.',
		id: '2',
		publishedAt: '2024-01-10T14:30:00Z',
		title: 'Community Volunteer Program Launch'
	},
	{
		category: 'partnership',
		content: 'AUSMAP announces new collaborations with leading Australian universities to expand research capabilities.',
		id: '3',
		publishedAt: '2024-01-05T09:15:00Z',
		title: 'Partnership with Local Universities'
	},
	{
		author: 'AUSMAP Research Team',
		category: 'report',
		content: 'Our comprehensive annual report showcasing the impact and progress made in combating microplastic pollution.',
		id: '4',
		publishedAt: '2023-12-20T16:00:00Z',
		title: 'Annual Report 2023 Released'
	}
];

export const NewsList = () => {
	const dispatch = useDispatch();
	const latestNews = useSelector((state) => selectLatestNews(state, 4));

	useEffect(() => {
		dispatch(setNews(mockNewsData));
	}, [dispatch]);

	return (
		<section className={styles.newsList}>
			<Slider
				button={
					<RegularButton buttonStyle={styles.newsSlider__controls}>
						<ArrowSVG/>
					</RegularButton>
				}
				buttonsPosition="bottom"
				containerStyle={styles.newsSlider__container}
				sliderStyle={styles.newsSlider__slider}
			>
				{latestNews.map((news) => (
					<div key={news.id} className={styles.newsItem}>
						<NewsCard news={news} onClick={() => console.log('News clicked:', news.id)}/>
					</div>
				))}
			</Slider>
		</section>
	);
};
