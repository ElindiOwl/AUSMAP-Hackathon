import { InfluencerInfoRow } from 'features/InfluencerInfoRow';
import { SectionBlock } from 'shared/ui/SectionBlock/SectionBlock';

import style from './Influencing-Page.module.scss';

export async function loader() {
	return {};
}

export const InfluencingPage = () => {
	return (
		<div className={style.influencingPage}>
			<SectionBlock className={style.influencingPage__titleBlock}>
                How your voice can become a kickstarter for change
			</SectionBlock>
			<div className={style.influencingPage__grid}>
				<div className={style.influencingPage__engage}>How to engage decision makers</div>
				<div className={style.influencingPage__sectors}>Which sectors can take heed</div>
				<div className={style.influencingPage__register}>Register school interest</div>
				<div className={style.influencingPage__organize}>Organize research</div>
				<div className={style.influencingPage__tell}>Tell about AUSMAP in your network</div>
			</div>
			<InfluencerInfoRow/>
			<div className={style.influencingPage__mediaBlock}>
				<SectionBlock className={style.influencingPage__ausmapMedia}>AUSMAP in the media</SectionBlock>
				<SectionBlock className={style.influencingPage__videos}>Videos & Webinars</SectionBlock>
			</div>
		</div>
	);
};

export default InfluencingPage;