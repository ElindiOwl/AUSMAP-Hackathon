import type { MouseEvent } from 'react';
import { Heading, Text } from 'shared/ui';

import type { Report } from '../../model/types';

import styles from './ReportCard.module.scss';

interface ReportCardProps {
    report: Report;
    onDownload?: (reportId: string) => void;
}

export const ReportCard = ({ report, onDownload }: ReportCardProps) => {
	const handleDownload = (e: MouseEvent) => {
		e.stopPropagation();
		onDownload?.(report.id);
	};

	return (
		<article className={styles.reportCard}>
			<div className={styles.reportCard__header}>
				<Heading className={styles.reportCard__title} level="h3">
                    AUSMAP Report №{report.reportNumber}
				</Heading>
				<span className={styles.reportCard__category}>
					{report.category}
				</span>
			</div>
 
			<div className={styles.reportCard__content}>
				<Heading className={styles.reportCard__subtitle} level="h4">{report.title}</Heading>
				<Text className={styles.reportCard__summary}>{report.summary}</Text>

				<div className={styles.reportCard__meta}>
					<time className={styles.reportCard__date}>
						{new Date(report.publishedAt).toLocaleDateString()}
					</time>
					{report.fileSize && (
						<span className={styles.reportCard__size}>{report.fileSize}</span>
					)}
				</div>
			</div>

			<button
				className={styles.reportCard__downloadBtn}
				onClick={handleDownload}
			>
                Download Report
			</button>
		</article>
	);
};