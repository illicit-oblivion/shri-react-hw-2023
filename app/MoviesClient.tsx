'use client';

import {TicketCard} from "@app/ui/TicketCard/TicketCard";
import {rows, smallCols} from "@app/ui/utils";
import {Cinema, Movie} from "@app/api/types";
import {genreTranslations} from "@app/helpers/translations";
import {Filters} from "@app/ui/Filters/Filters";
import styles from './page.module.css'
import classNames from "classnames";
import {FC, useEffect, useState} from "react";

type Props = {
    cinemas: Cinema[];
}

export const MoviesClient: FC<Props> = ({cinemas}) => {
    let [movies, setMovies] = useState<Movie[]>([]);

    const [selectedCinema, setSelectedCinema] = useState('');

    console.log(selectedCinema);
    useEffect(() => {
        getMovies(selectedCinema).then(setMovies);
    }, [selectedCinema])

    const genreOptions = Array.from(new Set(movies.map((movie) => movie.genre))).map((item) => ({ name: genreTranslations[item], id: item }));
    const cinemaOptions = cinemas.map((cinema) => {return {name: cinema.name, id: cinema.id}});

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');

    if (genre) {
        movies = movies.filter((movie: Movie) => movie.genre === genre);
    }
    if (name) {
        movies = movies.filter((movie: Movie) =>
            movie.title.toLowerCase().includes(name.toLowerCase())
        );
    }

    return (
        <div className={smallCols}>
            <div className={styles['left-column']}>
                <Filters setName={setName} name={name} setGenre={setGenre} setCinema={setSelectedCinema} genreOptions={genreOptions} cinemaOptions={cinemaOptions} />
            </div>
            <div className={classNames(rows, styles['right-column'])}>
                {movies?.map((it) =>
                    <TicketCard
                        id={it.id}
                        key={it.id}
                        imageUrl={it.posterUrl}
                        title={it.title}
                        genre={genreTranslations[it.genre]}
                    />
                )}
            </div>
        </div>
    )
}

async function getMovies(cinema: string): Promise<Movie[]> {
    let url = 'http://localhost:3001/api/movies';
    if (cinema) {
        url += '?cinemaId=' + cinema;
    }
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
