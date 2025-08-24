import { peopleCheck, peopleTalk, peopleWalk, sandInHand, turtle } from 'shared/assets';
import { BackgroundSection, Heading, Text } from 'shared/ui';

import styles from './DetailSections.module.scss';

export const DetailSections = () => {
	return (
		<div className={styles.detailSections}>
			<BackgroundSection
				backgroundImage={peopleWalk}
				childrenContainerClassName={styles.detailSection__content}
				containerClassName={styles.detailSection}
				overlayClassName={styles.detailSection__overlay}
			>
				<Heading className={styles.detailSection__title} level='h4'>
                    MAPPING HOTSPOTS
				</Heading>
				<Text className={styles.detailSection__text}>
                    Working with the AUSMAP field equipment and methods allows the opportunity for citizens to be
                    engaged in scientific research around your local environment which provides reliable and valuable
                    data.
                    By mapping hotspots around Australia over time, areas of concern can be identified, that can assist
                    with management.
				</Text>
			</BackgroundSection>
			<BackgroundSection
				backgroundImage={peopleCheck}
				childrenContainerClassName={styles.detailSection__content}
				containerClassName={styles.detailSection}
				overlayClassName={styles.detailSection__overlay}
			>
				<Heading className={styles.detailSection__title} level='h4'>
                    TRACKING SOURCES
				</Heading>
				<Text className={styles.detailSection__text}>
                    AUSMAP has partnered with several universities for more in depth study on microplastic around
                    Australia. Our research partners will use this data to investigate how microplastics are affecting
                    our environment, as well as potential impacts on humans.
				</Text>
			</BackgroundSection>
			<BackgroundSection
				backgroundImage={turtle}
				childrenContainerClassName={styles.detailSection__content}
				containerClassName={styles.detailSection}
				overlayClassName={styles.detailSection__overlay}
			>
				<Heading className={styles.detailSection__title} level='h4'>
                    OUR GOALS
				</Heading>
				<Text className={styles.detailSection__text}>
                    To achieve better management and regulation of plastic before it gets into our waterways, as well as
                    engage more Australians in positive change, it's crucial we determine how much has already entered
                    our aquatic ecosystems and how it behaves. That's what AUSMAP does.
				</Text>
			</BackgroundSection>
			<BackgroundSection
				backgroundImage={peopleTalk}
				childrenContainerClassName={styles.detailSection__content}
				containerClassName={styles.detailSection}
				overlayClassName={styles.detailSection__overlay}
			>
				<Heading className={styles.detailSection__title} level='h4'>
                    ENGAGING CITIZEN SCIENTISTS
				</Heading>
				<Text className={styles.detailSection__text}>
                    Our project will stimulate the conversations we need to have to protect our environment from
                    microplastics by influencing management, policy and behavioural change.
				</Text>
			</BackgroundSection>
			<BackgroundSection
				backgroundImage={sandInHand}
				childrenContainerClassName={styles.detailSection__content}
				containerClassName={styles.detailSection}
				overlayClassName={styles.detailSection__overlay}
			>
				<Heading className={styles.detailSection__title} level='h4'>
                    SPARKING INNOVATION
				</Heading>
				<Text className={styles.detailSection__text}>
                    AUSMAP's data and analysis is key to the development of innovative technologies and other solutions
                    to the microplastic crisis plaguing our oceans.
				</Text>
			</BackgroundSection>
		</div>
	);
};