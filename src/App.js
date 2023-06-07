import './App.css';
import React from 'react';
import {Header, Footer} from './Sections/index'
import {Main, Search , MovieDetails, TvDetails, Favorite } from './pages/index';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
              <Route path='/home' element={<Main/>} />
              <Route path='/search/:name' element={<Search/>} />
              <Route path='/movie/:movieId' element={<MovieDetails />} />
              <Route path='/tv/:movieId' element={<TvDetails />} />
              <Route path='/favorite' element={<Favorite />} />
              <Route path='/Contact' element={<Contact/>} />
      </Routes>
      
      <Footer />
    </Router>
  
  );
}


export default App;
