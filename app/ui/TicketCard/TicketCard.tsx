'use client';

import {FC} from "react";
import styles from './TicketCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {moviePoster} from "@app/strings";
import {Counter, CounterProps} from "@app/ui/Counter/Counter";
import {MovieFields} from "@app/types/MovieFields";
import CloseIcon from "@app/ui/icons/close.svg";

type Props = Pick<MovieFields, 'title' | 'genre' | 'imageUrl'> & CounterProps & {
    onDeleteButtonClick?: () => void;
};

export const TicketCard: FC<Props> = ({title, genre, imageUrl, onDeleteButtonClick, ...props}) => {
    return (
        <div className={cardStyles['cardColumns']}>
            <div className={styles['posterContainer']}>
                <Image src={imageUrl} alt={moviePoster} fill sizes="100ww"/>
            </div>
            <div className={styles['textContainer']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['description']}>{genre}</div>
            </div>
            <Counter {...props} />
            {onDeleteButtonClick && (
                <button className={styles['deleteButton']} onClick={onDeleteButtonClick}>
                    <CloseIcon width={12.5} height={12.5}/>
                </button>
            )}
        </div>
    );
}
