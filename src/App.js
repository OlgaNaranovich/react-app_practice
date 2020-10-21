import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Routes from './routes';
import { ThemeProvider } from './components/theme/ThemeContext';

const App = () => {
  let location = useLocation();

  return (
    <ThemeProvider>
      <div className="App">
        <div className="container">
          <Header location={location} />
          <Routes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
