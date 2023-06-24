'use client';

import {FC} from "react";
import styles from './ReviewCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {avatar, rating} from "@app/strings";
import defaultAvatar from '@app/ui/images/default-avatar.png';

type Props = {
    name: string;
    description: string;
    rating: number;
    imageUrl?: string;
}

export const ReviewCard: FC<Props> = (props) => {
    const ratingText = rating + ': ' + props.rating;

    return (
        <div className={cardStyles['card']}>
            <div className={cardStyles['cardImage']}>
                <Image src={props.imageUrl ?? defaultAvatar} alt={avatar} fill sizes="100ww"/>
            </div>
            <div className={styles['textContainer']}>
                <div className={styles['header']}>
                    <div className={styles['title']}>{props.name}</div>
                    <div dangerouslySetInnerHTML={{__html: ratingText}}></div>
                </div>
                <div className={styles['description']}>{props.description}</div>
            </div>
        </div>
    );
}
