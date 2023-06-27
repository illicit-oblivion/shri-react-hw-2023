import {Movie} from "@app/api/types";
import {CartClient} from "@app/cart/CartClient";

export default async function Cart() {
    const movies = await getMovies();
    return (
        <CartClient movies={movies} />
    )
}

async function getMovies(): Promise<Movie[]> {
    const res = await fetch('http://localhost:3001/api/movies')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
