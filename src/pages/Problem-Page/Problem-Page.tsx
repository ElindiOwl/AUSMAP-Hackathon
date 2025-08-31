import styles from './Problem-Page.module.scss';

import { ReportsRow } from 'features/ReportsRow';

import {DataSetMapSection, HelpSolveSection, TopicsSection} from '@/widgets';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function loader() {
	return {};
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function ProblemPage() {
	return (
		<div className={styles.problemPage}>
			<div className={styles.problemPage__problemHeader}>
				<div className={styles.problemPage__problemLabel}>The plastic problem</div>
				<div className={styles.problemPage__resultsLabel}>AUSMAP's microplastic Results</div>
			</div>
			<ReportsRow/>
            <DataSetMapSection/>
            <HelpSolveSection/>
            <TopicsSection/>
		</div>
	);
}
