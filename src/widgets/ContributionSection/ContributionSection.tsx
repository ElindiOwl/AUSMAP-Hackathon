import { Heading, RegularButton, SectionBlock, Text } from 'shared/ui';
import { Link } from 'react-router';
import { water } from 'shared/assets';

import styles from './ContributionSection.module.scss';

export const ContributionSection = () => {
	return (
		<SectionBlock className={styles.contributionSection} style={{ backgroundImage: `url(${water})` }}>
			<Heading className={styles.contributionSection__title} level="h2">
                you can make a difference!
			</Heading>
			<Text className={styles.contributionSection__text}>
                Join our sample teams, train as an educator, help us build the network that will save our
                aquatic ecosystems from microplastic pollution or donate!
			</Text>
			<Link to="/contribution">
				<RegularButton
					buttonStyle={styles.contributionSection__button}
					type="button"
				>
                    JOIN US!
				</RegularButton>
			</Link>
		</SectionBlock>
	);
};