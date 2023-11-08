import { OriginalLanguage } from "./original-language";

export class Movie{
    adult:             boolean | null;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;

    constructor(movie?: Movie)
    {
        this.adult = movie?.adult == undefined ? null : movie.adult;
        this.backdrop_path = movie?.backdrop_path == undefined ? "" : movie.backdrop_path;
        this.genre_ids = movie?.genre_ids == undefined ? [] : movie.genre_ids;
        this.id = movie?.id == undefined ? 0 : movie.id;
        this.original_language = movie?.original_language == undefined ? OriginalLanguage.None : movie.original_language;
        this.original_title = movie?.original_title == undefined ? "" : movie.original_title;
        this.overview = movie?.overview == undefined ? "" : movie.overview;
        this.popularity = movie?.popularity == undefined ? 0 : movie.popularity;
        this.release_date = movie?.release_date == undefined ? new Date() : movie.release_date;
        this.poster_path = movie?.poster_path == undefined ? "" : movie?.poster_path;
        this.title = movie?.title == undefined ? "" : movie.title;
        this.video = movie?.video == undefined ? false : movie.video;
        this.vote_average = movie?.vote_average == undefined ? 0 : movie.vote_average;
        this.vote_count = movie?.vote_count == undefined ? 0 : movie.vote_count;
    }
}