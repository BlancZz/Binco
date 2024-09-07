import './App.css';
import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageList from './PageList';
import { ThemeContext } from './ThemeContext';
import Landing from './Landing';
import Dashboard from './Dashboard';

function App() {
  return (
    <ThemeContext>
      {/* <Router> */}
      <Dashboard />
      {/* </Router> */}
      {/* <Landing /> */}
    </ThemeContext>
  );
}

export default App;
