import React, { FC } from "react";
import "./Poster.css";

interface PosterProps {
  src: string;
  alt: string;
}

const Poster: FC<PosterProps> = ({ src, alt }) => {
  return (
    <div className="poster-container">
      <img src={src} alt={alt} className="poster" />
    </div>
  );
};

export default Poster;
