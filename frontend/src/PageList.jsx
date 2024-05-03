import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
// import Maths from './Maths';
// import Connect from './Connect';
import MessagePage from './components/msger/MessagePage';
import Whiteboard from './components/whiteboard/Whiteboard';
import WhiteboardPage from './components/whiteboard/WhiteboardPage';
import Landing from './Landing';
import { ThemeContext } from './ThemeContext';

import DarkBackground from './assets/DarkBackground.png';
import LightBackground from './assets/LightBackground.png';
import { useTheme } from './ThemeContext';

const PageList = () => {
  const { mode } = useTheme();

  return (
    <>
      <NavBar />
      <div
        style={{
          height: '100vh',
          backgroundImage:
            mode === 'dark'
              ? `url(${DarkBackground})`
              : `url(${LightBackground})`,
          backgroundSize: 'cover',
          // backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          paddingTop: '4rem',
          color: mode === 'dark' ? 'white' : 'black',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10rem',
          // alignItems: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path='/game/math' element={<Maths/>} />*/}
          <Route path="/whiteboard" element={<WhiteboardPage />} />
          <Route path="/message" element={<MessagePage />} />
        </Routes>
        <footer className="position-fixed w-100 text-center p-3 b-0">
          &copy; 2024 Cool Website. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default PageList;
