import { Heading, RegularButton, Text } from 'shared/ui';
import { Link } from 'react-router';
import { michelleBlewitt } from 'shared/assets';

import styles from './MainMissionSection.module.scss';

export const MainMissionSection = () => {
	return (
		<div className={styles.missionSection}>
			<Heading className={styles.missionSection__title} level="h2">
                IT'S HARD TO SOLVE A PROBLEM YOU CAN'T SEE. SO WE'RE PUTTING MICROPLASTIC POLLUTION ON THE
                MAP!
			</Heading>

			<div className={styles.missionSection__content}>
				<div className={styles.missionSection__textBlock}>
					<Text className={styles.missionSection__text}>
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
							buttonStyle={styles.missionSection__button}
							type="button"
						>
                            LET'S GET ACQUAINTED!
						</RegularButton>
					</Link>
				</div>

				<div className={styles.missionSection__directorSection}>
					<img
						alt="Dr Michelle Blewitt"
						className={styles.missionSection__directorImage}
						src={michelleBlewitt}
					/>
					<div className={styles.missionSection__directorInfo}>
						<Heading className={styles.missionSection__directorTitle} level="h4">
                            Program Director
						</Heading>
						<Heading className={styles.missionSection__directorName} level="h3">
                            Dr Michelle Blewitt
						</Heading>
						<Text className={styles.missionSection__directorTenure}>
                            (2018-January 2025)
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
};