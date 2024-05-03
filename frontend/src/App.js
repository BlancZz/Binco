import './App.css';
import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageList from './PageList';
import { ThemeContext } from './ThemeContext';

function App() {
  return (
    <ThemeContext>
      <Router>
        <PageList />
      </Router>
    </ThemeContext>
  );
}

export default App;
