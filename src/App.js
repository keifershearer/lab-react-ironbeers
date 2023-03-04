import './App.css';
import { Route, Routes } from "react-router-dom";
import Beers from './pages/beers/Beers';
import RandomBeer from './pages/randomBeer/RandomBeer';
import NewBeer from './pages/newBeer/NewBeer'
import Home from './pages/home/Home';
import Header from './pages/Header';
import BeerDetails from './pages/beers/beerDetails/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Header />}>
          <Route path='/beers' element={<Beers />} />
          <Route path='/beers/:id' element={<BeerDetails />} />
          <Route path='/beers/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<NewBeer />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
