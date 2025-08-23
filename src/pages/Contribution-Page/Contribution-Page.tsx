import { TeamCommentsSlider } from 'features/TeamCommentsSlider';
import { SectionBlock } from 'shared/ui/SectionBlock/SectionBlock';
import { Link } from 'react-router';

import style from './Contribution-Page.module.scss';

export async function loader() {
	return {};
}

export const ContributionPage = () => {
	return (
		<div className={style.contributionPage}>
			<SectionBlock className={style.contributionPage__titleBlock}>
                The ways of participation in the project and overall impact of people's help
			</SectionBlock>
			<TeamCommentsSlider/>
			<div className={style.contributionPage__optionsGrid}>
				<Link className={style.contributionPage__volunteer} to="/volunteering">Become a volunteer</Link>
				<Link className={style.contributionPage__samples} to="/research">Provide samples/research</Link>
				<Link className={style.contributionPage__donor} to="/donating">Become a donor/funder</Link>
				<Link className={style.contributionPage__influencer} to="/influencing">Become an influencer</Link>
			</div>
		</div>
	);
};