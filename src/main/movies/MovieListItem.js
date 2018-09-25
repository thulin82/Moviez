import React from "react";
import "./MovieListItem.css";

const MovieListItem = ({ title }) => (
  <li className="movie-item">{title}</li>
);

export default MovieListItem;