import {BackgroundSection, Heading} from 'shared/ui';
import {horizon} from 'shared/assets';

import styles from './ParticipationHeaderSection.module.scss';

export const ParticipationHeaderSection = () => (
    <BackgroundSection
        backgroundImage={horizon}
        childrenContainerClassName={styles.participationHeader__content}
        containerClassName={styles.participationHeader}
        overlayClassName={styles.participationHeader__overlay}
    >
        <Heading className={styles.participationHeader__title} level="h1">
            The ways of participation in the project and overall impact of people's help
        </Heading>
    </BackgroundSection>
);
