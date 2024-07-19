import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import "./index.css";
import HomePage from './pages/homepage/HomePage';
import MovieList from './components/MovieList/MovieList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}  >
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies/:type' element={<MovieList />} />
    </Routes>
  </BrowserRouter>
);