import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Home from './components/Home';
import Search from './components/Search';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState([]);

  const getMovies = async (key) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=63d0f37b&s=${key}`
    );
    setMovies(response.data.Search);
  };

  const onSearch = () => {
    getMovies(searchKey)
  }

  useEffect(() => {
    getMovies("fast");
  }, []);


  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home 
        searchKey={searchKey} 
        setSearchKey={setSearchKey} 
        getMovies={getMovies} 
        onSearch={onSearch} />}
        />
        <Route path='/search' element={<Search 
        movies={movies} 
        searchKey={searchKey} 
        setSearchKey={setSearchKey} 
        getMovies={getMovies} 
        onSearch={onSearch}  />} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;
