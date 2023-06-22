'use client';

import {FC} from "react";
import styles from './TicketCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {moviePoster} from "@app/strings";
import {Counter, CounterProps} from "@app/ui/Counter/Counter";

type Props = {
    title: string;
    description: string;
    imageUrl: string;
} & CounterProps;

export const TicketCard: FC<Props> = ({title, description, imageUrl, ...props}) => {
    return (
        <div className={cardStyles['card']}>
            <div className={styles['posterContainer']}>
                <Image src={imageUrl} alt={moviePoster} fill sizes="100ww"/>
            </div>
            <div className={styles['textContainer']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['description']}>{description}</div>
            </div>
            <Counter {...props} />
        </div>
    );
}
