import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import IndivitualMovies from './Components/IndivitualMovies';
import DKR from './Movies/DKR';
import MA from './Movies/MA';
import SS from './Movies/SS';
import CR from './Movies/CR';
import CCF from './Movies/CCF';

function App() {
  return (
    <div className="App">
      <MovieList/>
      <IndivitualMovies/>
    </div>
  );
}

export default App;
