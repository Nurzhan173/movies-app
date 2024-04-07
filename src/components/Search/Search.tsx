import React from "react";
import { observer } from "mobx-react-lite";
import "./Search.css";
import { useMoviesStore } from "../../providers/RootStoreProvider";
import { debounce } from "../../utils/utils";

const Search = observer(() => {
  const { getMoviesList } = useMoviesStore();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    getMoviesList(value);
  };

  const delayedGetMoviesList = debounce(onSearch, 500);

  return (
    <input
      type="text"
      id="search"
      onChange={delayedGetMoviesList}
      className="search"
    />
  );
});

export default Search;
