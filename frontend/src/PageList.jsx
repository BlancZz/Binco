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
import Starfield from 'react-starfield';

const PageList = () => {
  const { mode } = useTheme();

  return (
    <>
      {/* <NavBar /> */}

      {/* <div
        style={{
          // height: '100vh',
          // backgroundImage:
          //   mode === 'dark'
          //     ? `url(${DarkBackground})`
          //     : `url(${LightBackground})`,
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'bottom',
          paddingTop: '4rem',
          backgroundColor: mode !== 'dark' ? '#faf0e6' : '#0D0D0D',
          color: mode === 'dark' ? '#faf0e6' : '#0D0D0D',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10rem',
        }}
      > */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/PopQuote" element={<Landing />} />
        {/* <Route path='/game/math' element={<Maths/>} />*/}
        <Route path="/whiteboard" element={<WhiteboardPage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
      <footer
        className="position-fixed w-100 text-center p-3 b-0"
        style={{ color: /*mode === 'dark' ? '#faf0e6' :*/ '#0D0D0D' }}
      >
        &copy; PopQuote website. All rights reserved.
      </footer>
      {/* </div> */}
    </>
  );
};

export default PageList;
