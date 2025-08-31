import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Heading, RegularButton, Slider } from 'shared/ui';
import {
	ArrowSVG,
	AwesomePlastic,
	ManlyCove,
	MappingMicroplastics,
	WorstMicroplastic,
	howStudentsCanHelp,
	whatsNewInTheWorld
} from 'shared/assets';
import type { News } from 'entities/news';
import { NewsCard, selectLatestNews, setNews } from 'entities/news';

import style from './NewsList.module.scss';

const mockNewsData = [
	{
		author: 'AUSMAP',
		category: 'education',
		content: 'Students are stepping up to fight plastic pollution with AUSMAP. Learn how education and citizen science are driving change across Australia.',
		id: 'students-next-wave',
		imageUrl: howStudentsCanHelp,
		publishedAt: '2025-08-06T10:00:00Z',
		title: 'How students can help tackle plastic pollution - Next Wave'
	},
	{
		author: 'AUSMAP',
		category: 'updates',
		content: 'Dive into our latest updates: projects, partnerships, training days, and highlights from the AUSMAP community.',
		id: 'whats-new-world',
		imageUrl: whatsNewInTheWorld,
		publishedAt: '2025-06-26T09:00:00Z',
		title: 'What’s new in the world of AUSMAP?'
	},
	{
		author: 'AUSMAP',
		category: 'community',
		content: 'Wrapping up our Coastcare Grant in Mornington with hands-on science and community engagement along Victoria’s coast.',
		id: 'mapping-microplastics-mornington',
		imageUrl: MappingMicroplastics,
		publishedAt: '2025-06-02T09:00:00Z',
		title: 'Mapping Microplastics Along Victoria’s Coast: AUSMAP Wraps Up…'
	},
	{
		author: 'AUSMAP',
		category: 'fieldwork',
		content: 'Sampling day at Manly Cove reveals microplastic fragments and fibres — here’s what we found and why it matters.',
		id: 'manly-cove-swimming',
		imageUrl: ManlyCove,
		publishedAt: '2024-12-16T10:00:00Z',
		title: 'Manly Cove: Swimming in Microplastics?'
	},
	{
		author: 'AUSMAP',
		category: 'research',
		content: 'New analysis shows the worst microplastic pollution hotspot in Australia may be in Adelaide — findings and context inside.',
		id: 'worst-microplastic-adelaide',
		imageUrl: WorstMicroplastic,
		publishedAt: '2024-08-09T09:00:00Z',
		title: 'Worst Microplastic Pollution in Australia is in Adelaide'
	},
	{
		author: 'AUSMAP',
		category: 'lifestyle',
		content: 'Reduce waste this holiday season with these plastic-free ideas curated by AUSMAP.',
		id: '13-awesome-plastic-free-christmas-ideas',
		imageUrl: AwesomePlastic,
		publishedAt: '2023-11-28T10:00:00Z',
		title: '13 Awesome PLASTIC-FREE CHRISTMAS Ideas'
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
