import { BackgroundSection, Heading, Text } from 'shared/ui';
import { beach } from 'shared/assets';

import style from './WhatIsAusmapSection.module.scss';

export const WhatIsAusmapSection = () => {
	return (
		<BackgroundSection
			backgroundImage={beach}
			childrenContainerClassName={style.whatIsSection_content}
			containerClassName={style.whatIsSection}
			overlayClassName={style.whatIsSection_overlay}
		>
			<Heading className={style.whatIsSection__title} level="h1">
                What is AUSMAP
			</Heading>
			<Heading className={style.whatIsSection__subTitle} level='h3'>
                AUSMAP is the bridge between a massive problem and the solutions.
			</Heading>
			<Text className={style.whatIsSection__text}>
                It is designed to document and analyse microplastic pollution in Australian aquatic
                environments.
                Lead by Total Environment Centre (TEC) and working with a consortium of research, environment,
                education, government and sustainable business organisations.
			</Text>
		</BackgroundSection>
	);
};