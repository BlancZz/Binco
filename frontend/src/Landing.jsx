import React from 'react';
// import DiscordService from './services/DiscordService';
// import useForm from "./hook/useForm";
// import NavBar from './NavBar';
// let username = "Stephen";
import Bees from './Bees.png';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import DarkBackground from './assets/DarkBackground.png';

import LightBackground from './assets/LightBackground.png';
import { useTheme } from './ThemeContext';
import CursorFollow from './components/cursor/CursorFollow';

const Landing = () => {
  const navigate = useNavigate();
  const { mode } = useTheme();

  const follower = React.useRef(null);

  // let myDiv = document.getElementById('my-div');
  //Detect touch device
  function isTouchDevice() {
    try {
      //We try to create TouchEvent. It would fail for desktops and throw error
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  const move = (e) => {
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try {
      //PageX and PageY return the position of client's cursor from top left of screen
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}
    //set left and top of div based on mouse position
    // follower.current.style.left = x - 50 + 'px';
    // follower.current.style.top = y - 50 + 'px';
  };
  //For mouse
  document.addEventListener('mousemove', (e) => {
    move(e);
  });
  //For touch
  document.addEventListener('touchmove', (e) => {
    move(e);
  });

  return (
    <>
      <CursorFollow />
      <Box
        className="title"
        sx={{
          // bgcolor: mode === 'light' ? 'white' : '#4F4686',
          // minWidth: '35rem',
          // minHeight: '20rem',
          // maxHeight: '50%',
          // borderRadius: '1rem',
          // border: `2px solid ${mode === 'light' ? '#EE79C6' : '#9F7CD7'}`,
          // overflow: 'hidden',
          // filter: 'drop-shadow(rgba(0,0,0,0.3) 16px 16px)',
          // boxSizing: 'border-box',
          typography: 'h1',
          fontWeight: 'bold',
        }}
      >
        Bianco Zeng
      </Box>
      <div id="my-div" ref={follower}>
        pp
      </div>
    </>
  );
};

export default Landing;
