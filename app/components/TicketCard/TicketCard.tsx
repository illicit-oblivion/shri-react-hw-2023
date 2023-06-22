'use client';

import {FC} from "react";
import styles from './TicketCard.module.css';
import Image from "next/image";
import {moviePoster} from "@app/strings/common";
import {maxOrder} from "@app/config";
import Plus from '@app/ui/icons/plus.svg';
import Minus from '@app/ui/icons/minus.svg';

type Props = {
    title: string;
    description: number;
    imageUrl: string;
    count: number;
    onAddClick: () => void;
    onSubtractClick: () => void;
}

export const TicketCard: FC<Props> = (props) => {
    const subtractDisabled = !props.count;
    const addDisabled = props.count >= maxOrder;
    return (
        <div className={styles['card']}>
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
