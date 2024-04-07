import { MoviesStore } from "./MoviesStore";

export class RootStore {
  movies: MoviesStore;

  constructor() {
    this.movies = new MoviesStore(this);
  }
}
