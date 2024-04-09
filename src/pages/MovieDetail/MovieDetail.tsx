import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useMoviesStore } from "../../providers/RootStoreProvider";
import { Link, useParams } from "react-router-dom";
import { Actor } from "../../stores/MoviesStore";
import Button from "../../components/Button/Button";
import { BackIcon } from "../../components/Icons/BackIcon";
import "./MovieDetail.css";

const MovieDetail: React.FC = observer(() => {
  const { getMovieDetail, movieDetail, isLoading } = useMoviesStore();
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail(String(id));
  }, []);

  if (isLoading || !movieDetail) {
    return <p className="wrapper">loading...</p>;
  }

  return (
    <div className="wrapper">
      <Link to="/">
        <div className="back-to-main">
          <BackIcon width={20} height={20} />
          <span>Back</span>
        </div>
      </Link>

      <div className="movie-details">
        <div className="image">
          <img alt="poster" width={212} height={320} src={movieDetail.image} />
        </div>
        <div className="info">
          <h3>{movieDetail.name}</h3>
          <span>{movieDetail.keywords}</span>
          <span>Date: {movieDetail.datePublished}</span>
          <span>Genre: {movieDetail.genre.join(", ")}</span>
          <span>
            Actors:
            {movieDetail.actor.map((actor: Actor) => (
              <span key={actor.name}> {actor.name},</span>
            ))}
          </span>
          <span>{movieDetail.description}</span>
          <div className="trailer-btn">
            <Link
              to={movieDetail.trailer?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Trailer</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MovieDetail;
