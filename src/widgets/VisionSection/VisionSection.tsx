import { Heading, SectionBlock, Text } from 'shared/ui';

import styles from './VisionSection.module.scss';

export const VisionSection = () => {
	return (
		<SectionBlock className={styles.visionSection}>
			<div className={styles.visionSection__content}>
				<Heading className={styles.visionSection__title} level="h2">
                    Vision
				</Heading>
				<div className={styles.visionSection__textBlock}>
					<Text className={styles.visionSection__text}>
                        It's hard to solve a problem you can't see.
					</Text>
					<Text className={styles.visionSection__text}>
                        Until recently microplastic pollution presented scientists with a crisis that was
                        NEAR invisible to the naked eye. Now we have AUSMAP.
					</Text>
					<Text className={styles.visionSection__text}>
                        By translating data into vivid maps of plastic pollution hotspots all over Australia,
                        the Australian Microplastic Assessment Project makes it easy for everyone to see the
                        scale and nature of this growing problem.
					</Text>
					<Text className={styles.visionSection__text}>
                        We need to know how much is already out there, before we figure out what to do with it.
                        And we need large numbers of Australians to engage with behaviour change so we can stop
                        any more plastic disintegrating into our waterways.
					</Text>
					<Text className={styles.visionSection__text}>
                        That's why AUSMAP is a collaborative citizen science project.
                        Together we can all do something to clean up our rivers and oceans.
					</Text>
				</div>
			</div>
		</SectionBlock>
	);
};