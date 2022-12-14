import Landing from './components/Landing';
import MovieCard from './components/MovieCard';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
    <Landing />
    <div className='movies'>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
    
    </>
  );
}

export default App;
