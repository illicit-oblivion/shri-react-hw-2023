'use client';

import {FC, Fragment} from "react";
import styles from './MovieCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import Image from "next/image";
import {description, director, genre, moviePoster, rating, releaseYear} from "@app/strings";
import {Counter} from "@app/ui/Counter/Counter";
import {MovieFields} from "@app/types/MovieFields";
import {Title} from "@app/ui/Title/Title";

const fields = {
    genre,
    releaseYear,
    rating,
    director,
}

type Field = keyof typeof fields;

export const MovieCard: FC<MovieFields> = ({ ...props}) => {
    return (
        <div className={cardStyles['cardColumns']}>
            <div className={styles['posterContainer']}>
                <Image fetchPriority={'high'} quality={90} className={styles['poster']} src={props.imageUrl} alt={moviePoster} fill sizes="100ww" priority/>
            </div>
            <div className={styles['rightColumn']}>
                <div className={styles['header']}>
                    <Title className={styles['title']}>{props.title}</Title>
                    <Counter id={props.id}/>
                </div>
                <dl className={styles['fields']}>
                    {Object.entries(fields).map(([prop, field]) => {
                        return (
                            <Fragment key={field}>
                                <dt>{field}:</dt>
                                <dd>{props[prop as Field]}</dd>
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
