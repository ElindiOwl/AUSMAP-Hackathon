import {Heading} from 'shared/ui';

import styles from './ContributeHeaderSection.module.scss';

export const ContributeHeaderSection = () => {
    return (
        <section className={styles.contributeHeader}>
            <Heading className={styles.contributeHeader__title} level="h2">
                How can YOU contribute
            </Heading>
        </section>
    );
};