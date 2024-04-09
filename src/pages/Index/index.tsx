import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useMoviesStore } from "../../providers/RootStoreProvider";
import { MoviesListItem } from "../../stores/MoviesStore";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import "./index.css";
import ErrorBoundary from "../../components/ErrorBoundry/ErrorBoundry";

const Index: React.FC = observer(() => {
  const { getMoviesList, moviesList } = useMoviesStore();

  useEffect(() => {
    getMoviesList("");
  }, []);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <div className="wrapper">
          <div className="movies-list">
            {moviesList?.map((movieItem: MoviesListItem) => (
              <Card key={movieItem.IMDB_ID} movieItem={movieItem} />
            ))}
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
});

export default Index;
