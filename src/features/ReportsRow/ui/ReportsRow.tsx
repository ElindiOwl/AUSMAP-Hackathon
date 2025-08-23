import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from 'shared/ui/Slider';
import { RegularButton } from 'shared/ui/Buttons/Regular-Button';
import { ArrowSVG } from 'shared/assets/svg/Arrow-SVG';
import { ReportCard, setReports } from 'entities/report';

import styles from './ReportsRow.module.scss';

const mockReportsData = [
	{
		category: 'microplastic' as const,
		downloadUrl: '/reports/ausmap-report-1.pdf',
		fileSize: '2.4 MB',
		id: '1',
		publishedAt: '2024-01-20T00:00:00Z',
		reportNumber: 1,
		summary: 'Comprehensive analysis of microplastic distribution patterns across Australian coastal waters.',
		title: 'Microplastic Distribution Analysis'
	},
	{
		category: 'research' as const,
		downloadUrl: '/reports/ausmap-report-2.pdf',
		fileSize: '1.8 MB',
		id: '2',
		publishedAt: '2024-01-15T00:00:00Z',
		reportNumber: 2,
		summary: 'Standardized protocols and methodologies for microplastic research and data collection.',
		title: 'Research Methodology Standards'
	},
	{
		category: 'annual' as const,
		downloadUrl: '/reports/ausmap-report-3.pdf',
		fileSize: '3.1 MB',
		id: '3',
		publishedAt: '2024-01-10T00:00:00Z',
		reportNumber: 3,
		summary: 'Assessment of community engagement and citizen science contributions to the AUSMAP project.',
		title: 'Community Impact Assessment'
	},
	{
		category: 'special' as const,
		downloadUrl: '/reports/ausmap-report-4.pdf',
		fileSize: '2.7 MB',
		id: '4',
		publishedAt: '2024-01-05T00:00:00Z',
		reportNumber: 4,
		summary: 'Latest technological innovations and tools developed for microplastic detection and analysis.',
		title: 'Technology Innovation Report'
	},
	{
		category: 'research' as const,
		downloadUrl: '/reports/ausmap-report-5.pdf',
		fileSize: '1.9 MB',
		id: '5',
		publishedAt: '2023-12-30T00:00:00Z',
		reportNumber: 5,
		summary: 'Evidence-based policy recommendations for addressing microplastic pollution in Australia.',
		title: 'Policy Recommendations'
	}
];

export const ReportsRow = () => {
	const dispatch = useDispatch();
	const reports = useSelector((state: any) => state.report.items);

	useEffect(() => {
		dispatch(setReports(mockReportsData));
	}, [dispatch]);

	const handleDownload = (reportId: string) => {
		const report = reports.find((r: any) => r.id === reportId);
		if (report) {
			window.open(report.downloadUrl, '_blank');
		}
	};

	return (
		<div className={styles.reportsRow}>
			<Slider
				button={
					<RegularButton buttonStyle={styles.reportsSlider__controls}>
						<ArrowSVG/>
					</RegularButton>
				}
				buttonsPosition="bottom"
				containerStyle={styles.reportsSlider__container}
				sliderStyle={styles.reportsSlider__slider}
			>
				{reports.map((report: any) => (
					<div key={report.id} className={styles.reportItem}>
						<ReportCard
							report={report}
							onDownload={handleDownload}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};
