export type Genre = 'fantasy' | 'horror' | 'action' | 'comedy';

export type Movie = {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: Genre;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
}


export type Review = {
    id: string;
    name: string;
    text: string;
    rating: number;
}

export type Cinema = {
    id: string;
    name: string;
    movieIds: string[];
}
