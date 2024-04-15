import { RootStore } from "./RootStore";
import { action, makeObservable, observable } from "mobx";
import { BASE_URL } from "../constants/constants";
import { removeHashSymbols } from "../utils/utils";

export interface MoviesListItem {
  ACTORS: string;
  AKA: string;
  IMDB_ID: string;
  IMDB_IV: string;
  IMDB_URL: string;
  IMG_POSTER: string;
  RANK: number;
  TITLE: string;
  YEAR: number;
  photo_height: number;
  photo_width: number;
}

export interface Actor {
  name: string;
  url: string;
}

export interface Trailer {
  url: string;
}

export interface MovieDetail {
  actor: Actor[];
  contentRating: string;
  datePublished: string;
  description: string;
  genre: string[];
  image: string;
  keywords: string;
  name: string;
  trailer: Trailer;
}

export class MoviesStore {
  root: RootStore;
  moviesList: MoviesListItem[];
  movieDetail: any;
  error: boolean;
  isLoading: boolean;

  constructor(root: RootStore) {
    this.root = root;
    this.moviesList = [];
    this.error = false;
    this.isLoading = false;

    makeObservable(this, {
      getMoviesList: action,
      setMovies: action,
      moviesList: observable,
      movieDetail: observable,
      setMovieDetail: action,
      getMovieDetail: action,
      setError: action,
      error: observable,
      isLoading: observable,
    });
  }

  setMovies = (movies: MoviesListItem[]) => {
    this.moviesList = movies;
  };

  setMovieDetail = (movieDetail: MovieDetail) => {
    this.movieDetail = movieDetail;
  };

  setError = (value: boolean) => {
    this.error = value;
  };

  setLoading = (value: boolean) => {
    this.isLoading = value;
  };

  getMoviesList = async (query: string) => {
    try {
      const response = await fetch(`${BASE_URL}?q=${query}`);

      const result = await response.json();

      if (!result.ok) {
        this.setError(true);
        return;
      }

      const modifiedDescription = result.description.map((movieObj: any) => {
        return removeHashSymbols(movieObj);
      });

      const updatedResponse = {
        ...response,
        description: modifiedDescription,
      };

      this.setMovies(updatedResponse.description);
    } catch (error) {
      console.error("Error fetching", error);
      this.setError(true);
    }
  };

  getMovieDetail = async (id: string) => {
    this.setLoading(true);
    const response = await fetch(`${BASE_URL}?tt=${id}`);

    const result = await response.json();
    this.setMovieDetail(result.short);
    this.setLoading(false);
  };
}
