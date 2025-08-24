import { ResearchPhotosRow } from 'features/ResearchPhotosRow';
import { SectionBlock } from 'shared/ui';

import style from './Research-Page.module.scss';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function loader() {
	return {};
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function ResearchPage() {
	return (
		<div className={style.researchPage}>
			<div className={style.researchPage__researchGrid}>
				<div className={style.researchPage__processed}>How data is processed</div>
				<div className={style.researchPage__provide}>How to provide data</div>
				<div className={style.researchPage__map}>Hotspot map</div>
				<div className={style.researchPage__about}>About the map</div>
			</div>
			<ResearchPhotosRow/>
			<SectionBlock className={style.researchPage__hubBlock}>
                Find nearest regional hub
			</SectionBlock>
		</div>
	);
}