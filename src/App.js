import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import IndivitualMovies from './Components/IndivitualMovies';
import DKR from './Movies/DKR';
import MA from './Movies/MA';
import SS from './Movies/SS';
import CR from './Movies/CR';
import CCF from './Movies/CCF';
import SeachBar from './Components/SeachBar';
import Header from './Components/Header';
import './Styling/SeachBar.css';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App2 from '.';
function App() {

  return (
    <div className="App">
      <Header/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default App;
