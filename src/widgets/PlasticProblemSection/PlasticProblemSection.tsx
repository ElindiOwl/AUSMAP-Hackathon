import { BackgroundSection, Heading, RegularButton, Text } from 'shared/ui';
import { Link } from 'react-router';
import { sandInHand } from 'shared/assets';

import styles from './PlasticProblemSection.module.scss';

export const PlasticProblemSection = () => {
	return (
		<BackgroundSection
			backgroundImage={sandInHand}
			childrenContainerClassName={styles.problemSection__content}
			containerClassName={styles.problemSection}
			overlayClassName={styles.problemSection__overlay}
		>
			<Heading className={styles.problemSection__title} level="h1">
                the plastic problem
			</Heading>
			<Text className={styles.problemSection__text}>
				<span>Until recently microplastic pollution presented scientists with a crisis that was invisible to
				the human eye.</span><br/>
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
		</BackgroundSection>
	);
};