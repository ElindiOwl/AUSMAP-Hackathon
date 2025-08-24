import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Heading, RegularButton, Slider } from 'shared/ui';
import { ArrowSVG } from 'shared/assets';
import type { News } from 'entities/news';
import { NewsCard, selectLatestNews, setNews } from 'entities/news';

import style from './NewsList.module.scss';

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
	},
	{
		author: 'AUSMAP Research Team',
		category: 'report',
		content: 'Our comprehensive annual report showcasing the impact and progress made in combating microplastic pollution.',
		id: '5',
		publishedAt: '2023-12-15T16:00:00Z',
		title: 'Annual Report 2023 Updated'
	}
];

export const NewsList = () => {
	const dispatch = useAppDispatch();
	const latestNews = useAppSelector((state) => selectLatestNews(state, mockNewsData.length));

	useEffect(() => {
		dispatch(setNews(mockNewsData));
	}, [dispatch]);

	return (
		<section className={style.newsList}>
			<div className={style.newsList__header}>
				<Heading className={style.newsList__title} level="h2">
                    READ THE LATEST NEWS!
				</Heading>
			</div>
			<Slider
				button={
					<RegularButton buttonStyle={style.newsSlider__controls}>
						<ArrowSVG/>
					</RegularButton>
				}
				buttonsPosition="middle"
				containerStyle={style.newsSlider__container}
				sliderStyle={style.newsSlider__slider}
			>
				{latestNews.map((news: News) => (
					<NewsCard
						key={news.id}
						news={news}
						onClick={() => {
						}}
					/>
				))}
			</Slider>
		</section>
	);
};
