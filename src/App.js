import React, { useState, useEffect } from 'react';
import FilteredList from '../src/components/FilteredList';
import SearchBox from '../src/components/SearchBox/index';
import '../src/app.css';
import Header from './components/Header';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = 'a85be56dc67f8ab1e609b7a198187160';
      const pageNumbers = [1, 2, 3, 4, 5, 6, 7]; 
      const moviePromises = pageNumbers.map(page =>
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
          .then(response => response.json())
      );
      const movieResults = await Promise.all(moviePromises);
      const allMovies = movieResults.flatMap(result => result.results);
      setMovies(allMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <h1>FILTER MOVIE APP</h1>
        <SearchBox setSearchText={setSearchText} />
        <FilteredList items={movies} searchText={searchText} />
      </main>
    </div>
  );
};

export default App;