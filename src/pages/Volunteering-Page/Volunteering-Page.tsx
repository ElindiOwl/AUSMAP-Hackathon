import { BlockItem, SectionBlock } from 'shared/ui';
import { VolunteerPhotosSlider } from 'features/VolunteerPhotosSlider';

import style from './Volunteering-Page.module.scss';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function loader() {
	return {};
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function VolunteeringPage() {
	return (
		<div className={style.volunteeringPage}>
			<SectionBlock className={style.volunteeringPage__row}>
				<BlockItem variant="cyan">Volunteers impact and further opportunities</BlockItem>
				<BlockItem variant="yellow">Engaging questions</BlockItem>
			</SectionBlock>
			<SectionBlock className={style.volunteeringPage__row}>
				<BlockItem variant="blue">Duties</BlockItem>
				<BlockItem variant="red">How to join</BlockItem>
			</SectionBlock>
			<VolunteerPhotosSlider/>
			<SectionBlock>
				<BlockItem className={style.volunteeringPage__block_large} variant="green">Corporate team building with
                    AUSMAP</BlockItem>
			</SectionBlock>
			<SectionBlock>
				<BlockItem className={style.volunteeringPage__block_large} variant="yellow">Open roles</BlockItem>
			</SectionBlock>
		</div>
	);
}