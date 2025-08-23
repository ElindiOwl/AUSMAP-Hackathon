import { SectionBlock } from 'shared/ui/SectionBlock/SectionBlock';

import style from './Donating-Page.module.scss';

export async function loader() {
	return {};
}

export const DonatingPage = () => {
	return (
		<div className={style.donatingPage}>
			<div className={style.donatingPage__headerGrid}>
				<SectionBlock className={style.donatingPage__help}>How your donation can help</SectionBlock>
				<SectionBlock className={style.donatingPage__goals}>What goals donations already allowed to
                    achieve</SectionBlock>
				<SectionBlock className={style.donatingPage__donate}>How to donate</SectionBlock>
			</div>
			<SectionBlock className={style.donatingPage__opportunityBlock}>
				<div className={style.donatingPage__title}>Funding opportunity</div>
				<div className={style.donatingPage__row}>
					<SectionBlock className={style.donatingPage__item}>Impact and specifications</SectionBlock>
					<SectionBlock className={style.donatingPage__item}>Conditions and options</SectionBlock>
				</div>
			</SectionBlock>
			<div className={style.donatingPage__merchBlock}>
				<SectionBlock className={style.donatingPage__text}>
                    Merchandise helps not only with funds, but makes the project recognizable
				</SectionBlock>
				<div className={style.donatingPage__itemRow}>
					<SectionBlock className={style.donatingPage__merchItem}>Item showcase</SectionBlock>
					<SectionBlock className={style.donatingPage__merchItem}>Item showcase</SectionBlock>
					<SectionBlock className={style.donatingPage__merchItem}>Item showcase</SectionBlock>
				</div>
			</div>
		</div>
	);
}

export default DonatingPage;