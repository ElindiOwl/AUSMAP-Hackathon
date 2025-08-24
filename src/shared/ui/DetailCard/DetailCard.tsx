import {Heading, BackgroundSection, Text} from 'shared/ui';

import styles from './DetailCard.module.scss';

type DetailCardProps = {
    title: string;
    text: string;
    backgroundImage: string;
    variant?: 'default' | 'goals';
    className?: string;
};

export const DetailCard = ({title, text, backgroundImage, variant = 'default', className}: DetailCardProps) => {
    const cardClass = variant === 'goals'
        ? `${styles.detailCard} ${styles.detailCard_goals} ${className || ''}`
        : `${styles.detailCard} ${className || ''}`;

    const titleLevel = variant === 'goals' ? 'h2' as const : 'h3' as const;
    const titleClass = variant === 'goals' ? styles.detailCard__goalsTitle : styles.detailCard__title;

    return (
        <BackgroundSection
            backgroundImage={backgroundImage}
            className={cardClass}
        >
            <Heading className={titleClass} level={titleLevel}>
                {title}
            </Heading>
            <Text className={styles.detailCard__text}>
                {text}
            </Text>
        </BackgroundSection>
    );
};