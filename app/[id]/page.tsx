'use client';

import {Movie, Review} from "@app/api/types";
import {MovieCard} from "@app/ui/MovieCard/MovieCard";
import {Suspense} from "react";
import {genre} from "@app/helpers/translations";
import {ReviewsList} from "@app/ui/ReviewsList/ReviewsList";
import {rows} from "@app/ui/utils";

export default async function MoviePage({params}: { params: { id: string } }) {

    const moviePromise = getMovie(params.id);
    const reviewsPromise = getReviews(params.id);

    // Wait for the artist's promise to resolve first
    const movie = await moviePromise

    return (
        <div className={rows}>
            <MovieCard
                imageUrl={movie.posterUrl}
                title={movie.title}
                genre={genre[movie.genre]}
                releaseYear={movie.releaseYear}
                rating={movie.rating}
                director={movie.director}
                description={movie.description}
                count={5}
                onAddClick={() => {
                }}
                onSubtractClick={() => {
                }}
            />
            <Suspense fallback={<div>Loading...</div>}>
              <ReviewsList promise={reviewsPromise} />
            </Suspense>
        </div>
    )
}

async function getMovie(movieId: string): Promise<Movie> {
    const res = await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getReviews(movieId: string): Promise<Review[]> {
    const res = await fetch(`http://localhost:3001/api/reviews?movieId=${movieId}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
