import { Heading, SectionBlock } from 'shared/ui';

import styles from './MissionSection.module.scss';

export const MissionSection = () => {
	return (
		<SectionBlock className={styles.missionSection}>
			<div className={styles.missionSection__content}>
				<Heading className={styles.missionSection__title} level="h2">
                    Mission
				</Heading>
				<div className={styles.missionSection__textBlock}>
					<ul className={styles.missionSection__list}>
						<li>Develop a standard method to assess and record microplastic pollution on Australian
                            shorelines
						</li>
						<li>Train leaders in microplastic pollution survey and data recording methods</li>
						<li>Engage citizens in monitoring Australian shorelines with standard methods and
                            uploading data
						</li>
						<li>Develop educational programs on microplastics</li>
						<li>Research the quantities, types and chemical components of microplastics</li>
						<li>Report on microplastic pollution levels to Australian communities</li>
					</ul>
				</div>
			</div>
		</SectionBlock>
	);
};