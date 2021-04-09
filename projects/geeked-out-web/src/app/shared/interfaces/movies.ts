export interface Movies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}

export interface MoviesImageData {
    backdrop_sizes: Array<string>;
    base_url: string;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    secure_base_url: string;
    still_sizes: Array<string>;
}

export interface MoviesResponse {
    dates: {maximun: string, minimum: string};
    page: number;
    results: Movies[];
    total_pages: number;
    total_results: number;
    imageData: MoviesImageData;
}
