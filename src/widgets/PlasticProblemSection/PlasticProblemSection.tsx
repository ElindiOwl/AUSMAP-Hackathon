import { Heading, RegularButton, SectionBlock, Text } from 'shared/ui';
import { Link } from 'react-router';
import { sandInHand } from 'shared/assets';

import styles from './PlasticProblemSection.module.scss';

export const PlasticProblemSection = () => {
	return (
		<SectionBlock className={styles.problemSection} style={{ backgroundImage: `url(${sandInHand})` }}>
			<Heading className={styles.problemSection__title} level="h2">
                the plastic problem
			</Heading>
			<Text className={styles.problemSection__text}>
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
					buttonStyle={styles.problemSection__button}
					type="button"
				>
                    SEE FOR YOURSELF!
				</RegularButton>
			</Link>
		</SectionBlock>
	);
};