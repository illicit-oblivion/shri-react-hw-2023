'use client';

import {FC, Fragment} from "react";
import styles from './MovieCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {description, director, genre, moviePoster, rating, releaseYear} from "@app/strings";
import {Counter, CounterProps} from "@app/ui/Counter/Counter";
import {MovieFields} from "@app/types/MovieFields";

type Props = MovieFields & CounterProps;

const fields = {
    genre,
    releaseYear,
    rating,
    director,
}

export const MovieCard: FC<Props> = ({count, onSubtractClick, onAddClick, ...props}) => {
    const counterProps = {count, onSubtractClick, onAddClick};
    return (
        <div className={cardStyles['card']}>
            <div className={styles['posterContainer']}>
                <Image src={props.imageUrl} alt={moviePoster} fill sizes="100ww"/>
            </div>
            <div className={styles['rightColumn']}>
                <div className={styles['header']}>
                    <h1 className={styles['title']}>{props.title}</h1>
                    <Counter {...counterProps}/>
                </div>
                <dl className={styles['fields']}>
                    {Object.entries(fields).map(([prop, field]) => {
                        return (
                            <Fragment key={field}>
                                <dt>{field}:</dt>
                                <dd>{props[prop]}</dd>
                            </Fragment>
                        );
                    })}
                    <dt className={styles['description']}>{description}:</dt>
                    <dd>{props.description}</dd>
                </dl>
            </div>
        </div>
    );
}
