import { BackgroundSection, Heading, Text } from 'shared/ui';
import { beach } from 'shared/assets';

import styles from './WhatIsAusmapSection.module.scss';

export const WhatIsAusmapSection = () => {
	return (
		<BackgroundSection
			backgroundImage={beach}
			className={styles.whatIsSection}
		>
			<Heading className={styles.whatIsSection__title} level="h1">
                What is AUSMAP
			</Heading>

			<Text className={styles.whatIsSection__text}>
                AUSMAP is the bridge between a massive problem and the solutions.
			</Text>
			<Text className={styles.whatIsSection__text}>
                It is designed to document and analyse microplastic pollution in Australian aquatic
                environments.
                Lead by Total Environment Centre (TEC) and working with a consortium of research, environment,
                education, government and sustainable business organisations.
			</Text>
		</BackgroundSection>
	);
};