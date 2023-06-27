import {Cinema, Movie} from "@app/api/types";
import {MoviesClient} from "@app/MoviesClient";

export default async function MoviesPage() {
    const cinemas = await getCinemas();

    return (
       <MoviesClient cinemas={cinemas}/>
    )
}

async function getCinemas(): Promise<Cinema[]> {
    const res = await fetch('http://localhost:3001/api/cinemas')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
