import { BackgroundSection } from 'shared/ui';
import { turtle } from 'shared/assets';

import style from './Main-Page.module.scss';

import {
	ContributionSection,
	HeroSection,
	MainMissionSection,
	NewsletterSection,
	PlasticProblemSection
} from '@/widgets';
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function MainPage() {
	return (
		<div className={style.mainPage}>
			<BackgroundSection
				backgroundImage={turtle}
				childrenContainerClassName={style.mainPage__heroBlock_content}
				containerClassName={style.mainPage__heroBlock}
				overlayClassName={style.mainPage__heroBlock_overlay}
			>
				<HeroSection/>
				<MainMissionSection/>
			</BackgroundSection>
			<div className={style.mainPage__minorBlock}>
				<PlasticProblemSection/>
				<ContributionSection/>
			</div>
			<NewsletterSection/>
		</div>
	);
}