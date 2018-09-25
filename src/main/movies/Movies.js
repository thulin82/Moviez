import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";

const movies = ["Breaking bad", "Narcos", "Game of Thrones"];

class Movies extends React.Component {
  render() {
    return (
      <section> 
        <ul className="movies">
          {
            movies.map( (title, index) => (
              <MovieListItem key={index.toString()} title={title} />
            ))
          }
        </ul>
      </section>
    )
  }
}

export default Movies;