import { NewsList } from 'features/NewsList';
import { NewsBlock } from 'widgets/NewsBlock';
import { Heading, RegularButton, SectionBlock, Text } from 'shared/ui';
import { Link } from 'react-router';
import { michelleBlewitt, turtle } from 'shared/assets';

import style from './Main-Page.module.scss';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function MainPage() {
	return (
		<div className={style.mainPage}>
			<SectionBlock className={style.mainPage__aboutBlock} style={{ backgroundImage: `url(${turtle})` }}>
				<div className={style.mainPage__aboutContent}>
					<div className={style.mainPage__titleSection}>
						<Heading className={style.mainPage__subtitle} level="h3">
                            NATIONAL CITIZEN SCIENCE PROJECT
						</Heading>
						<Heading className={style.mainPage__title} level="h1">
                            AUSTRALIAN MICROPLASTIC ASSESSMENT PROJECT
						</Heading>
					</div>

					<div className={style.mainPage__missionSection}>
						<Heading className={style.mainPage__missionTitle} level="h2">
                            IT'S HARD TO SOLVE A PROBLEM YOU CAN'T SEE. SO WE'RE PUTTING MICROPLASTIC POLLUTION ON THE
                            MAP!
						</Heading>

						<div className={style.mainPage__missionContent}>
							<div className={style.mainPage__missionContent_textBlock}>
								<Text className={style.mainPage__missionText}>
                                    "At AUSMAP we're busy mapping pollution hotspots around Australia, building a
                                    network of
                                    data
                                    collectors whose work will help to save our river systems and coastlines. This is a
                                    nationwide
                                    citizen science project so you too can join our dedicated team of scientists,
                                    activists
                                    and
                                    researchers – welcome to AUSMAP!"
								</Text>

								<Link className={style.mainPage__lernMoreLink} to="/about">
									<RegularButton
										buttonStyle={style.mainPage__lernMoreButton}
										type="button"
									>
                                        LET'S GET ACQUAINTED!
									</RegularButton></Link>
							</div>

							<div className={style.mainPage__directorSection}>
								<img
									alt="Dr Michelle Blewitt"
									className={style.mainPage__directorImage}
									src={michelleBlewitt}
								/>
								<div className={style.mainPage__directorInfo}>
									<Heading className={style.mainPage__directorTitle} level="h4">
                                        Program Director
									</Heading>
									<Heading className={style.mainPage__directorName} level="h3">
                                        Dr Michelle Blewitt
									</Heading>
									<Text className={style.mainPage__directorTenure}>
                                        (2018-January 2025)
									</Text>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SectionBlock>
			<div className={style.mainPage__minorBlock}>
				<Link className={style.mainPage__problem} to="/problem">About problem</Link>
				<Link className={style.mainPage__contribution} to="/contribution">About contribution</Link>
			</div>
			<div className={style.mainPage__newsletterBlock}>
				<NewsList/>
				<NewsBlock/>
			</div>
		</div>
	)
}