'use client';

import {FC} from "react";
import styles from './MovieCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {moviePoster} from "@app/strings";
import {maxOrder} from "@app/config";
import Plus from '@app/ui/icons/plus.svg';
import Minus from '@app/ui/icons/minus.svg';

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    count: number;
    onAddClick: () => void;
    onSubtractClick: () => void;
}

export const MovieCard: FC<Props> = (props) => {
    const subtractDisabled = !props.count;
    const addDisabled = props.count >= maxOrder;
    return (
        <div className={cardStyles['card']}>
            <div className={styles['posterContainer']}>
                <Image src={props.imageUrl} alt={moviePoster} fill sizes="100ww"/>
            </div>
            <div className={styles['textContainer']}>
                <div className={styles['title']}>{props.title}</div>
                <div className={styles['description']}>{props.description}</div>
            </div>
            <div className={styles['counterContainer']}>
                <button
                    className={styles['subtractButton']}
                    onClick={props.onSubtractClick}
                ><Minus width={9} /></button>
                <span className={styles['count']}>{props.count}</span>
                <button
                    className={styles['addButton']}
                    onClick={props.onAddClick}
                ><Plus width={9} /></button>
            </div>
        </div>
    );
}
