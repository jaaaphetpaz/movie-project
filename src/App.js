import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Home from './components/Home';
import Search from './components/Search';
import DrawerSearch from './components/DrawerSearch';
import "./components/style.css"

function App() {
  const [movies, setMovies] = useState([]);
  const [updatedKey, setUpdatedKey] = useState([]);
  const [searchKey, setSearchKey] = useState([]);

const getMovies = async (key) => {
  
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=63d0f37b&s=${key}`
    );
    if (response.data.Response === "True"){
      setMovies(response.data.Search);
    } else {
      alert('Invalid keyword or too many search results try again.')
    }
    
};


  const onSearch = () => {
    if (searchKey.length > 0) {
    getMovies(searchKey)
    setUpdatedKey(searchKey)
     } else {
      alert('Please enter a valid keyword.')
    }
    
    
  }

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <>
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
       onSearch={onSearch}
       updatedKey={updatedKey}  />} 
       />
     </Routes>
   </Router>

    </>
    
  );
}

export default App;
