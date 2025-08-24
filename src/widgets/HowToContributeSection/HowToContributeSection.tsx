import { BackgroundSection, Heading, Text } from 'shared/ui';
import { Link } from 'react-router';
import { horizon } from 'shared/assets';

import style from './HowToContributeSection.module.scss';

export const HowToContributeSection = () => {
	return (
		<BackgroundSection
			backgroundImage={horizon}
			childrenContainerClassName={style.howToContribute__content}
			containerClassName={style.howToContribute}
			overlayClassName={style.howToContribute__overlay}
		>
			<Heading className={style.howToContribute__title} level="h2">
				<span className={style.howToContribute__darkHighlight}>How</span> can <span
					className={style.howToContribute__altHighlight}>YOU</span> join the <span
					className={style.howToContribute__highlight}>FIGHT</span> against
				<span className={style.howToContribute__altDarkHighlight}> MICROPLASTICS?</span>
			</Heading>

			<div className={style.howToContribute__waysGrid}>
				<Link className={`${style.howToContribute__wayCard} ${style.howToContribute__wayCard_volunteer}`}
					to="/volunteering">
					<Heading className={style.howToContribute__wayTitle} level="h3">Become a volunteer</Heading>
					<Text className={style.howToContribute__wayText}>
                        Help process and sort microplastic samples, add results to the national database, and map
                        pollution hotspots with our team.
					</Text>
				</Link>

				<Link className={`${style.howToContribute__wayCard} ${style.howToContribute__wayCard_research}`}
					to="/research">
					<Heading className={style.howToContribute__wayTitle} level="h3">Provide samples / research</Heading>
					<Text className={style.howToContribute__wayText}>
                        Collect shoreline samples using AUSMAP methods, contribute data, or collaborate with
                        universities on microplastics research.
					</Text>
				</Link>

				<Link className={`${style.howToContribute__wayCard} ${style.howToContribute__wayCard_donor}`}
					to="/donating">
					<Heading className={style.howToContribute__wayTitle} level="h3">Become a donor</Heading>
					<Text className={style.howToContribute__wayText}>
                        Fund nationwide citizen science, training, and data mapping to drive solutions where they are
                        needed most.
					</Text>
				</Link>

				<Link className={`${style.howToContribute__wayCard} ${style.howToContribute__wayCard_influencer}`}
					to="/influencing">
					<Heading className={style.howToContribute__wayTitle} level="h3">Become an influencer</Heading>
					<Text className={style.howToContribute__wayText}>
                        Raise awareness with councils, schools, and communities. Share hotspot maps to influence
                        behaviour and policy.
					</Text>
				</Link>
			</div>
		</BackgroundSection>
	);
};