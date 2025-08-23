import React from 'react';

import type { Report } from '../../model/types';

import styles from './ReportCard.module.scss';

interface ReportCardProps {
    report: Report;
    onDownload?: (reportId: string) => void;
}

export const ReportCard = ({ report, onDownload }: ReportCardProps) => {
	const handleDownload = (e: React.MouseEvent) => {
		e.stopPropagation();
		onDownload?.(report.id);
	};

	return (
		<article className={styles.reportCard}>
			<div className={styles.reportCard__header}>
				<h3 className={styles.reportCard__title}>
                    AUSMAP Report №{report.reportNumber}
				</h3>
				<span className={styles.reportCard__category}>
					{report.category}
				</span>
			</div>

			<div className={styles.reportCard__content}>
				<h4 className={styles.reportCard__subtitle}>{report.title}</h4>
				<p className={styles.reportCard__summary}>{report.summary}</p>

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