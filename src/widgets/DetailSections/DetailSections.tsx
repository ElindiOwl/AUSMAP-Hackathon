import { peopleCheck, peopleTalk, peopleWalk, sandInHand, turtle } from 'shared/assets';
import { DetailCard } from 'shared/ui';

import styles from './DetailSections.module.scss';

export const DetailSections = () => {
	return (
		<div className={styles.detailSections}>
			<DetailCard
				backgroundImage={peopleWalk}
				text="Working with the AUSMAP field equipment and methods allows the opportunity for citizens to be engaged in scientific research around your local environment which provides reliable and valuable data. By mapping hotspots around Australia over time, areas of concern can be identified, that can assist with management."
				title="MAPPING HOTSPOTS"
			/>

			<DetailCard
				backgroundImage={peopleCheck}
				text="AUSMAP has partnered with several universities for more in depth study on microplastic around Australia. Our research partners will use this data to investigate how microplastics are affecting our environment, as well as potential impacts on humans."
				title="TRACKING SOURCES"
			/>

			<DetailCard
				backgroundImage={turtle}
				text="To achieve better management and regulation of plastic before it gets into our waterways, as well as engage more Australians in positive change, it's crucial we determine how much has already entered our aquatic ecosystems and how it behaves. That's what AUSMAP does."
				title="OUR GOALS"
				variant="goals"
			/>

			<DetailCard
				backgroundImage={peopleTalk}
				text="Our project will stimulate the conversations we need to have to protect our environment from microplastics by influencing management, policy and behavioural change."
				title="ENGAGING CITIZEN SCIENTISTS"
			/>

			<DetailCard
				backgroundImage={sandInHand}
				text="AUSMAP's data and analysis is key to the development of innovative technologies and other solutions to the microplastic crisis plaguing our oceans."
				title="SPARKING INNOVATION"
			/>
		</div>
	);
};