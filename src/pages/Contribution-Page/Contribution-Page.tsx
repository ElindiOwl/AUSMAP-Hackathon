import style from './Contribution-Page.module.scss';
import { TeamCommentsSlider } from 'features/TeamCommentsSlider';
import {HowToContributeSection, ParticipationHeaderSection} from '@/widgets';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function loader() {
	return {};
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function ContributionPage() {
	return (
		<div className={style.contributionPage}>
            <ParticipationHeaderSection/>
			<TeamCommentsSlider/>
            <HowToContributeSection/>
		</div>
	);
}