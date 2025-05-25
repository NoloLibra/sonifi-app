import './App.css';
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SongList from './components/SongList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchForm />} />
        <Route path='/SongList' element={<SongList />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
