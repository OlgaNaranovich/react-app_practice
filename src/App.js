import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Routes from './routes';

const App = () => {
  let location = useLocation();

  return (
    <div className="App">
      <div className="container">
        <Header location={location} />
        <Routes />
      </div>
    </div>
  );
}

export default App;
