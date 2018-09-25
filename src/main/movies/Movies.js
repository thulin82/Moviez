import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";

const movies = ["Breaking bad", "Narcos", "Game of Thrones"];

class Movies extends React.Component {
  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

    console.log("Before or after data?");
  }

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