import { BackgroundSection, Heading, RegularButton, Text } from 'shared/ui';
import { Link } from 'react-router';
import { forest } from 'shared/assets';

import style from './DataSetMapSection.module.scss';

export const DataSetMapSection = () => {
	return (
		<BackgroundSection
			backgroundImage={forest}
			childrenContainerClassName={style.dataSetMap__content}
			containerClassName={style.dataSetMap}
			overlayClassName={style.dataSetMap__overlay}
		>
			<Heading className={style.dataSetMap__title} level="h2">Data set map</Heading>
			<Text className={style.dataSetMap__text}>
                Explore AUSMAP hotspot data collected by our nationwide network of citizen scientists and researchers.
			</Text>
			<Link to="/research">
				<RegularButton buttonStyle={style.dataSetMap__button} type="button">Open map</RegularButton>
			</Link>
		</BackgroundSection>
	);
};