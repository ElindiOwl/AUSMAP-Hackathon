import { NewsList } from 'features/NewsList';
import { NewsletterForm } from 'widgets/NewsletterForm';
import { SectionBlock } from 'shared/ui';
import { Link } from 'react-router';

import style from './Main-Page.module.scss';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function MainPage() {
	return (
		<div className={style.mainPage}>
			<SectionBlock className={style.mainPage__aboutBlock}>
				<Link className={style.mainPage__orgLink} to="/about">About Organization</Link>
			</SectionBlock>
			<div className={style.mainPage__minorBlock}>
				<Link className={style.mainPage__problem} to="/problem">About problem</Link>
				<Link className={style.mainPage__contribution} to="/contribution">About contribution</Link>
			</div>
			<NewsList/>
			<NewsletterForm/>
		</div>
	)
}