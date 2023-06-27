'use client';

import {FC} from "react";
import styles from './TicketCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {moviePoster} from "@app/strings";
import {Counter} from "@app/ui/Counter/Counter";
import {MovieFields} from "@app/types/MovieFields";
import {CloseIcon} from "@app/ui/icons";
import Link from "next/link";

type Props = Pick<MovieFields, 'title' | 'genre' | 'imageUrl' | 'id'> & {
    onDeleteButtonClick?: (id: string) => void;
};

export const TicketCard: FC<Props> = ({title, genre, imageUrl, id, onDeleteButtonClick}) => {
    return (
        <div className={cardStyles['cardColumns']}>
            <Link passHref href={`/${id}`} className={styles['posterContainer']}>
                <Image fetchPriority={'high'} className={styles['poster']} src={imageUrl} alt={moviePoster} fill sizes="100ww"/>
            </Link>
            <div className={styles['textContainer']}>
                <Link href={`/${id}`} className={styles['title']}>{title}</Link>
                <div className={styles['description']}>{genre}</div>
            </div>
            <Counter id={id} />
            {onDeleteButtonClick && (
                <button className={styles['deleteButton']} onClick={() => onDeleteButtonClick?.(id)}>
                    <CloseIcon width={12.5} height={12.5}/>
                </button>
            )}
        </div>
    );
}
