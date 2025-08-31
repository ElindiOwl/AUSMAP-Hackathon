import {BackgroundSection, Heading, RegularButton, Text} from 'shared/ui';
import {Link} from 'react-router';
import {water2} from 'shared/assets';

import styles from './HelpSolveSection.module.scss';

export const HelpSolveSection = () => {
    return (
        <BackgroundSection
            backgroundImage={water2}
            childrenContainerClassName={styles.helpSolve__content}
            containerClassName={styles.helpSolve}
            overlayClassName={styles.helpSolve__overlay}
        >
            <Heading className={styles.helpSolve__title} level="h2">You can help solve the problem</Heading>
            <Text className={styles.helpSolve__text}>
                Join our sample teams, support education and outreach, or help fund research. Every action moves us
                closer to
                reducing microplastic pollution.
            </Text>
            <Link to="/contribution">
                <RegularButton buttonStyle={styles.helpSolve__button} type="button">See how to
                    contribute</RegularButton>
            </Link>
        </BackgroundSection>
    );
};