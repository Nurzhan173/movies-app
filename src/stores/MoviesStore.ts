import { RootStore } from "./RootStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  reaction,
  toJS,
} from "mobx";
import { BASE_URL } from "../constants/constants";
import { removeHashSymbols } from "../utils/utils";
import { q } from "vitest/dist/reporters-QGe8gs4b";

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

export class MoviesStore {
  root: RootStore;
  moviesList: MoviesListItem[];

  constructor(root: RootStore) {
    this.root = root;
    this.moviesList = [];

    makeObservable(this, {
      getMoviesList: action,
      setMovies: action,
      moviesList: observable,
    });
  }

  setMovies = (movies: MoviesListItem[]) => {
    this.moviesList = movies;
  };

  getMoviesList = async (query: string) => {
    console.log(query);
    try {
      const response = await fetch(`${BASE_URL}?q=${query}`);

      const result = await response.json();

      // Process each movie object in the description array
      const modifiedDescription = result.description.map((movieObj: any) => {
        return removeHashSymbols(movieObj);
      });

      // Updated response object without '#' symbols in keys
      const updatedResponse = {
        ...response,
        description: modifiedDescription,
      };

      this.setMovies(updatedResponse.description);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };
}
