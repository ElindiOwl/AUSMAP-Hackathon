import { NewsList } from 'features/NewsList';
import { NewsBlock } from 'widgets/NewsBlock';
import { Heading, RegularButton, SectionBlock, Text } from 'shared/ui';
import { Link } from 'react-router';
import { michelleBlewitt, sandInHand, turtle, water, water2 } from 'shared/assets';

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

								<Link to="/about">
									<RegularButton
										buttonStyle={style.mainPage__learnAboutButton}
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
				<SectionBlock className={style.mainPage__problemBlock} style={{ backgroundImage: `url(${sandInHand})` }}>
					<Heading className={style.mainPage__title} level="h2">
                        the plastic problem
					</Heading>
					<Text className={style.mainPage__problemText}>
						<span>Until recently microplastic pollution presented scientists with a crisis that was invisible to
						the human eye. If no one could see the scale of the problem, how could we convince communities
						and government to engage with the biggest threat to ocean wildlife, and the human food chain,
						that has emerged in our lifetime?</span><br/>
						<span>Using the data collected by our network of citizen scientists and researchers, AUSMAP is
						creating vivid maps of microplastic pollution hotspots around Australia. Our
						work will enable communities and government to implement behaviour change, regulate industry,
						and develop better waste management systems.</span><br/>
						<span>Solutions come fast when you can actually see the problem!</span>
					</Text>
					<Link to="/problem">
						<RegularButton
							buttonStyle={style.mainPage__learnProblemButton}
							type="button"
						>
                            SEE FOR YOURSELF!
						</RegularButton></Link>
				</SectionBlock>
				<SectionBlock className={style.mainPage__contributionBlock} style={{ backgroundImage: `url(${water})` }}>
					<Heading className={style.mainPage__title} level="h2">
                        you can make a difference!
					</Heading>
					<Text className={style.mainPage__contributionText}>
                        Join our sample teams, train as an educator, help us build the network that will save our
                        aquatic ecosystems from microplastic pollution or donate!
					</Text>
					<Link to="/contribution">
						<RegularButton
							buttonStyle={style.mainPage__learnContributionButton}
							type="button"
						>
                            JOIN US!
						</RegularButton></Link>
				</SectionBlock>
			</div>
			<div className={style.mainPage__newsletterBlock} style={{ backgroundImage: `url(${water2})` }}>
				<NewsList/>
				<NewsBlock/>
			</div>
		</div>
	)
}