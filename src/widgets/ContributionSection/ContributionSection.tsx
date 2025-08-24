import { BackgroundSection, Heading, RegularButton, Text } from 'shared/ui';
import { Link } from 'react-router';
import { water } from 'shared/assets';

import style from './ContributionSection.module.scss';

export const ContributionSection = () => {
	return (
		<BackgroundSection
			backgroundImage={water}
			childrenContainerClassName={style.contributionSection__content}
			containerClassName={style.contributionSection}
			overlayClassName={style.contributionSection__overlay}
		>
			<Heading className={style.contributionSection__title} level="h2">
                you can make a difference!
			</Heading>
			<Text className={style.contributionSection__text}>
                Join our sample teams, train as an educator, help us build the network that will save our
                aquatic ecosystems from microplastic pollution or donate!
			</Text>
			<Link to="/contribution">
				<RegularButton
					buttonStyle={style.contributionSection__button}
					type="button"
				>
                    JOIN US!
				</RegularButton>
			</Link>
		</BackgroundSection>
	);
};