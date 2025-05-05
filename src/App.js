import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=a2526df0&s=sherlock")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }
  , []);

  return (
    <div className="App">
      <h1>Movie List</h1>
      {data && data.Search ? (
        <ul>
          {data.Search.map((movie) => (
            <li key={movie.imdbID}>
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default App;
