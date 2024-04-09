import React from "react";
import { observer } from "mobx-react-lite";
import { MoviesListItem } from "../../stores/MoviesStore";
import Button from "../../components/Button/Button";
import Poster from "../Poster/Poster";
import { Link } from "react-router-dom";
import "./Card.css";

interface Card {
  movieItem: MoviesListItem;
}

const Card: React.FC<Card> = observer(({ movieItem }) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <Poster src={movieItem.IMG_POSTER} alt="poster" />
      </div>
      <div className="info">
        <div className="description-section">
          <h3>{movieItem.AKA}</h3>
          <p>Actors: {movieItem.ACTORS}</p>
          <p>Rank: {movieItem.RANK}</p>
        </div>
      </div>

      <div className="action">
        <Link to={`/movie/${movieItem.IMDB_ID}`}>
          <Button variant="primary">More</Button>
        </Link>
      </div>
    </div>
  );
});

export default Card;
