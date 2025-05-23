import './App.css';
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import bgImage from './assets/bg.jpg';

function App() {
  return (
    <div className="relative">
      {/* Background with blur and gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${bgImage})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
          zIndex: 0,
        }}
      />
      {/* Foreground content */}
      <div className="relative z-10 text-center w-full">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
