import { ReportsRow } from 'features/ReportsRow';
import { SectionBlock } from 'shared/ui/SectionBlock/SectionBlock';

import styles from './Problem-Page.module.scss';

export async function loader() {
	return {};
}

export const ProblemPage = () => {
	return (
		<div className={styles.problemPage}>
			<div className={styles.problemPage__problemHeader}>
				<div className={styles.problemPage__problemLabel}>The plastic problem</div>
				<div className={styles.problemPage__resultsLabel}>AUSMAP's microplastic Results</div>
			</div>
			<ReportsRow/>
			<SectionBlock className={styles.problemPage__dataSetMap}>
                Data set map
			</SectionBlock>
			<SectionBlock className={styles.problemPage__helpInfo}>
                Short information about how people can help solve the problem
			</SectionBlock>
			<SectionBlock className={styles.problemPage__topics}>
                Rubber Crumb and other topics about microplastic
			</SectionBlock>
		</div>
	);
};

export default ProblemPage;
