'use client';

import {TicketCard} from "@app/ui/TicketCard/TicketCard";
import {rows} from "@app/ui/utils";
import {Movie} from "@app/api/types";
import {genre} from "@app/helpers/translations";

export default async function MoviesPage() {
    const movies = await getMovies();

    return (
        <div className={rows}>
            {movies?.map((it) =>
                <TicketCard
                    id={it.id}
                    key={it.id}
                    imageUrl={it.posterUrl}
                    title={it.title}
                    genre={genre[it.genre]}
                />
            )}
        </div>
    )
}

async function getMovies(): Promise<Movie[]> {
    const res = await fetch('http://localhost:3001/api/movies')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
