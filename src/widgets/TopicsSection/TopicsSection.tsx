import {BackgroundSection, Heading} from 'shared/ui';
import {Link} from 'react-router';
import {water} from 'shared/assets';

import styles from './TopicsSection.module.scss';

export const TopicsSection = () => {
    return (
        <BackgroundSection
            backgroundImage={water}
            childrenContainerClassName={styles.topics__content}
            containerClassName={styles.topics}
            overlayClassName={styles.topics__overlay}
        >
            <Heading className={styles.topics__title} level="h2">Rubber Crumb and other topics</Heading>
            <div className={styles.topics__grid}>
                <Link className={styles.topics__item} to="/topics/rubber-crumb">Rubber crumb in sports fields</Link>
                <Link className={styles.topics__item} to="/topics/fishing-gear">Lost fishing gear</Link>
                <Link className={styles.topics__item} to="/topics/microbeads">Microbeads</Link>
                <Link className={styles.topics__item} to="/topics/textile-fibres">Textile fibres</Link>
            </div>
        </BackgroundSection>
    );
};