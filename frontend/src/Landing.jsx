'use client';
import React from 'react';
// import DiscordService from './services/DiscordService';
// import useForm from "./hook/useForm";
import NavBar from './NavBar';
// let username = "Stephen";
// import Bees from './Bees.png';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import DarkBackground from './assets/DarkBackground.png';

import LightBackground from './assets/LightBackground.png';
import { useTheme } from './ThemeContext';
import CursorFollow from './components/cursor/CursorFollow';

import Starfield from 'react-starfield';
// import SparklesCore from './components/ui/sparkles';
// import { SparklesCore } from './components/ui/sparkles.tsx';
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from './components/ui/glowing-stars.tsx';
import { Meteors } from './components/ui/meteors.tsx';
import { meteorCard } from './components/ui/meteor-card.jsx';
import { Reveal } from './components/ui/reveal.tsx';
import { RevealUp } from './components/ui/revealup.tsx';
import ButtonWrapper from './components/ui/spotlightButton.jsx';
import { BackgroundBeams } from './components/ui/background-beams.tsx';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Bees from './Bees.png';

import StrengthMeter from './components/ui/strengthMeter.js';

import Example from './components/ui/horizontalScoll.jsx';
// import Slider from './components/ui/slider.jsx';

import { FlipWords } from './components/ui/flip-words.tsx';

const Landing = () => {
  const navigate = useNavigate();
  const { mode } = useTheme();

  const [activeRotate, setActiveRotate] = React.useState(false);
  const [activeStars, setActiveStars] = React.useState(false);

  const words = [
    `Full Stack Developer.`,
    'middle blocker.',
    'smol brain boii.',
    'stay at home husband.',
  ];

  const menuKeyDefault = 'Who is this guy?';
  const menuValueDefault = `I'm a passionate University student who loves building and
  scaling
  \n
  cohesive software. I enjoy adding my own flare to projects
  and \n
  hope to one day make a project that substantiates my
  identity and \n
  existence. I'm also always down to play some volleyball and
  chess. \n
  Let's connect!`;

  const [menuKey, setMenuKey] = React.useState(menuKeyDefault);
  const [menuValue, setMenuValue] = React.useState(menuValueDefault);
  const [menuActive, setMenuActive] = React.useState(-1);
  const [menuScore, setMenuScore] = React.useState(4);

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

  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-white stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    );
  };

  const styleRotate = {
    transform: activeRotate ? 'rotate(315deg)' : '',
    transition: 'transform 1.25s ease',
  };

  // const menuArray = [];

  return (
    <Box
      sx={{
        paddingTop: '4rem',
        backgroundColor: mode !== 'dark' ? '#faf0e6' : '#101318',
        color: mode === 'dark' ? '#faf0e6' : '#101318',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <CursorFollow /> */}
      {activeStars ? (
        <Starfield
          starCount={1500}
          starColor={mode === 'dark' ? [255, 255, 255] : [0, 0, 0]}
          speedFactor={0.1}
          sx={
            {
              // height: '50vh',
            }
          }
          // backgroundColor={mode !== 'dark' ? 'white' : '#black'}
        />
      ) : (
        <></>
      )}
      <Box>
        <Box
          className="title-page"
          sx={{
            // minWidth: '35rem',
            height: '93vh',
            // maxHeight: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#161b22',
          }}
        >
          <BackgroundBeams />
          <Box
            sx={{
              height: '80%',
              width: '80%',
              // backgroundColor: '#161b22',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: '1rem',
            }}
          >
            <Box
              className="op-txt"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                // align: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box>
                <Reveal>
                  <Box
                    className="title"
                    sx={{
                      typography: 'h2',
                    }}
                  >
                    Hello, I'm{' '}
                    <span
                      style={{
                        // fontFamily: 'Verdana',
                        color: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                        fontWeight: 'bold',
                      }}
                    >
                      Bianco Zeng!
                    </span>
                  </Box>
                </Reveal>
                <Reveal>
                  <Box
                    sx={{
                      typography: 'h3',
                      // fontSize: '3rem',
                      // fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: '0.5rem',
                      }}
                    >
                      I'm a
                    </Box>
                    <Box>
                      <FlipWords words={words} /> <br />
                    </Box>
                  </Box>
                </Reveal>
              </Box>
            </Box>
            <Box
              onClick={() => {
                setActiveStars(!activeStars);
              }}
              sx={
                {
                  // margin: '5rem',
                  // border: 1,
                  // borderRadius: '1rem',
                }
              }
            >
              <ButtonWrapper />
            </Box>
          </Box>
        </Box>
        <NavBar />
        <Box
          sx={{
            backgroundColor: '#161b22',
            width: '100%',
            height: '110vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem',
            paddingTop: '5rem',
            // backgroundColor: 'transparent',
            // borderStyle: 'solid',
            // borderTopWidth: '25px',
            // borderTopColor: 'transparent',
            // borderLeftWidth: '50px',
            // borderLeftColor: '#555',
            // borderBottomWidth: '25px',
            // borderBottomColor: '#transparent',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Reveal>
              <Box
                className="title"
                sx={{
                  typography: 'h2',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    // fontFamily: 'Verdana',
                    color: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                  }}
                >
                  About
                </span>
              </Box>
            </Reveal>
            <Reveal>
              <Box
                className="title"
                sx={{
                  backgroundColor: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                  height: '0.5rem',
                  width: '5rem',
                  margin: '1rem',
                }}
              ></Box>
            </Reveal>
          </Box>
          {/* <RevealUp> */}
          <Box>
            <Box
              sx={{
                display: 'none',
                transform: 'scale(0.7)',
                transform: 'scaleY(0.9)',
              }}
            >
              <Box class="hexagon">
                here is some content inside the hex if you want...
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: '4rem',
                paddingLeft: '4rem',
                justifyContent: 'space-around',
              }}
            >
              <RevealUp>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <button className="mb-10 mt-10 rounded-2xl  bg-[#313c4c] px-9 py-9 font-semibold uppercase text-black transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] shadow-[2px_2px_0px_#b7f3ff] hover:shadow-[4px_4px_0px_#b7f3ff] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16C11.2044 16 10.4413 15.6839 9.87868 15.1213C9.31608 14.5587 9.00001 13.7956 9.00001 13C9.00001 11.88 9.61001 10.9 10.5 10.39L20.21 4.77L14.68 14.35C14.18 15.33 13.17 16 12 16ZM12 3C13.81 3 15.5 3.5 16.97 4.32L14.87 5.53C14 5.19 13 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84286 8.84344 4.00001 10.8783 4.00001 13C4.00001 15.21 4.89001 17.21 6.34001 18.65H6.35001C6.74001 19.04 6.74001 19.67 6.35001 20.06C5.96001 20.45 5.32001 20.45 4.93001 20.07C4.00002 19.1426 3.26244 18.0406 2.75962 16.8273C2.2568 15.614 1.99865 14.3134 2.00001 13C2.00001 10.3478 3.05357 7.8043 4.92894 5.92893C6.8043 4.05357 9.34784 3 12 3ZM22 13C22 15.76 20.88 18.26 19.07 20.07C18.68 20.45 18.05 20.45 17.66 20.06C17.5673 19.9675 17.4938 19.8576 17.4436 19.7366C17.3934 19.6157 17.3676 19.486 17.3676 19.355C17.3676 19.224 17.3934 19.0943 17.4436 18.9734C17.4938 18.8524 17.5673 18.7425 17.66 18.65C18.4037 17.9093 18.9934 17.0287 19.395 16.059C19.7966 15.0893 20.0023 14.0496 20 13C20 12 19.81 11 19.46 10.1L20.67 8C21.5 9.5 22 11.18 22 13Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <Box
                    sx={{
                      typography: 'h5',
                      // fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Optimsation
                  </Box>
                </Box>
              </RevealUp>
              <RevealUp>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <button className="mb-10 mt-10 rounded-2xl  bg-[#313c4c] px-9 py-9 font-semibold uppercase text-black transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] shadow-[2px_2px_0px_#b7f3ff] hover:shadow-[4px_4px_0px_#b7f3ff] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.2178 3.21594C10.2497 3.12068 10.262 3.01999 10.2542 2.91986C10.2464 2.81972 10.2185 2.72218 10.1723 2.63301C10.1261 2.54385 10.0624 2.46488 9.98504 2.40079C9.90771 2.3367 9.81829 2.2888 9.72208 2.25993C9.62588 2.23106 9.52487 2.2218 9.42502 2.23271C9.32517 2.24362 9.22854 2.27447 9.14084 2.32344C9.05315 2.3724 8.97618 2.43849 8.91451 2.51776C8.85284 2.59704 8.80772 2.6879 8.78183 2.78494L5.78183 12.7849C5.73296 12.9729 5.75888 13.1724 5.85413 13.3416C5.94938 13.5108 6.10654 13.6365 6.29255 13.6922C6.47855 13.7479 6.67891 13.7293 6.85148 13.6403C7.02405 13.5512 7.15537 13.3988 7.21783 13.2149L10.2178 3.21494V3.21594ZM4.52983 4.96994C4.67028 5.11057 4.74917 5.30119 4.74917 5.49994C4.74917 5.69869 4.67028 5.88932 4.52983 6.02994L2.55983 7.99994L4.52983 9.96994C4.66231 10.1121 4.73443 10.3002 4.731 10.4945C4.72758 10.6888 4.64886 10.8741 4.51145 11.0116C4.37404 11.149 4.18865 11.2277 3.99435 11.2311C3.80005 11.2345 3.612 11.1624 3.46983 11.0299L0.969828 8.52994C0.829378 8.38932 0.750488 8.19869 0.750488 7.99994C0.750488 7.80119 0.829378 7.61057 0.969828 7.46994L3.46983 4.96994C3.61045 4.82949 3.80108 4.7506 3.99983 4.7506C4.19858 4.7506 4.3892 4.82949 4.52983 4.96994ZM11.4698 11.0299C11.3294 10.8893 11.2505 10.6987 11.2505 10.4999C11.2505 10.3012 11.3294 10.1106 11.4698 9.96994L13.4398 7.99994L11.4698 6.02994C11.3373 5.88777 11.2652 5.69972 11.2687 5.50542C11.2721 5.31112 11.3508 5.12573 11.4882 4.98832C11.6256 4.85091 11.811 4.77219 12.0053 4.76877C12.1996 4.76534 12.3877 4.83746 12.5298 4.96994L15.0298 7.46994C15.1703 7.61057 15.2492 7.80119 15.2492 7.99994C15.2492 8.19869 15.1703 8.38932 15.0298 8.52994L12.5298 11.0299C12.3892 11.1704 12.1986 11.2493 11.9998 11.2493C11.8011 11.2493 11.6105 11.1704 11.4698 11.0299Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <Box
                    sx={{
                      typography: 'h5',
                      // fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    say you say me
                  </Box>
                </Box>
              </RevealUp>
              <RevealUp>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                    <button className="mb-10 mt-10 rounded-2xl  bg-[#313c4c] px-9 py-9 font-semibold uppercase text-black transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] shadow-[2px_2px_0px_#b7f3ff] hover:shadow-[4px_4px_0px_#b7f3ff] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 256 256"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M178 36C157.91 36 140.08 43.93 128 57.56C115.92 43.93 98.09 36 78 36C60.5022 36.0212 43.7272 42.9815 31.3543 55.3543C18.9815 67.7272 12.0212 84.5022 12 102C12 174.34 117.81 232.14 122.31 234.57C124.059 235.512 126.014 236.005 128 236.005C129.986 236.005 131.941 235.512 133.69 234.57C138.19 232.14 244 174.34 244 102C243.979 84.5022 237.018 67.7272 224.646 55.3543C212.273 42.9815 195.498 36.0212 178 36ZM172.51 178.36C158.583 190.178 143.694 200.815 128 210.16C112.306 200.815 97.4173 190.178 83.49 178.36C61.82 159.77 36 131.42 36 102C36 90.8609 40.425 80.178 48.3015 72.3015C56.178 64.425 66.8609 60 78 60C95.8 60 110.7 69.4 116.89 84.54C117.791 86.7471 119.329 88.6358 121.308 89.9653C123.286 91.2948 125.616 92.0048 128 92.0048C130.384 92.0048 132.714 91.2948 134.692 89.9653C136.671 88.6358 138.209 86.7471 139.11 84.54C145.3 69.4 160.2 60 178 60C189.139 60 199.822 64.425 207.698 72.3015C215.575 80.178 220 90.8609 220 102C220 131.42 194.18 159.77 172.51 178.36Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </Box>

                  <Box
                    sx={{
                      typography: 'h5',
                      // fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Useability
                  </Box>
                </Box>
              </RevealUp>
              <RevealUp>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <button className="mb-10 mt-10 rounded-2xl  bg-[#313c4c] px-9 py-9 font-semibold uppercase text-black transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] shadow-[2px_2px_0px_#b7f3ff] hover:shadow-[4px_4px_0px_#b7f3ff] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.53307 13.653L10.5001 15.373V6.50004C10.4999 6.30299 10.5386 6.10784 10.6139 5.92574C10.6892 5.74364 10.7996 5.57816 10.9388 5.43873C11.2201 5.15714 11.6016 4.9988 11.9996 4.99854C12.3975 4.99827 12.7793 5.1561 13.0609 5.43731C13.2003 5.57656 13.3109 5.7419 13.3865 5.9239C13.462 6.10589 13.5009 6.30099 13.5011 6.49804L13.5051 11.262L16.1411 11.689C17.8431 11.949 18.6941 12.078 19.2931 12.442C20.2831 13.044 21.0001 14 21.0001 15.266C21.0001 16.184 20.7761 16.8 20.2321 18.456C19.8871 19.506 19.7141 20.031 19.4321 20.446C18.9719 21.1284 18.2879 21.6286 17.4981 21.86C17.0201 22 16.4741 22 15.3831 22H14.4571C13.0051 22 12.2801 22 11.6331 21.73C11.5176 21.6807 11.4044 21.626 11.2941 21.566C10.6801 21.228 10.2221 20.656 9.30707 19.514L6.34407 15.816C6.12211 15.5392 6.00049 15.1953 5.99904 14.8404C5.99758 14.4856 6.11638 14.1407 6.33607 13.862C6.46319 13.6993 6.62216 13.5641 6.80326 13.4648C6.98436 13.3655 7.1838 13.3042 7.3894 13.2845C7.595 13.2648 7.80245 13.2873 7.99908 13.3505C8.19572 13.4137 8.37741 13.5173 8.53307 13.653Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 8H6.176C4.68 8 3.93 8 3.466 7.56C3 7.122 3 6.415 3 5C3 3.585 3 2.879 3.465 2.44C3.93 2.001 4.68 2 6.176 2H17.823C19.321 2 20.07 2 20.535 2.44C21 2.878 21 3.585 21 5C21 6.415 21 7.121 20.535 7.56C20.07 7.999 19.32 8 17.823 8H17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <Box
                    sx={{
                      typography: 'h5',
                      // fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Interactiveness
                  </Box>
                </Box>
              </RevealUp>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '15%',
                marginTop: '5rem',
                // flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  // alignItems: 'left',
                  // flexDirection: 'column',
                  flex: '1',
                }}
              >
                <Box
                  class="menu-container"
                  sx={{
                    // margin: '5rem',
                    alignSelf: 'left',
                    width: '100%',
                  }}
                >
                  <ul class={`menu ${activeRotate ? 'active' : ''}`}>
                    <div
                      class="toggle"
                      onClick={(e) => {
                        setActiveRotate(!activeRotate);
                        // e.target.style.transition = 'transform 1.25s ease';
                        // e.target.style.borderRadius = activeRotate ? '25%' : '50%';
                      }}
                    >
                      <svg
                        width="75"
                        height="75"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: activeRotate
                            ? `rotate(585deg)`
                            : 'rotate(0deg)',
                          transition: 'transform 1.3s ease',
                        }}
                      >
                        <path
                          d="M200 100C200 103.183 198.736 106.235 196.485 108.485C194.235 110.736 191.183 112 188 112H112V188C112 191.183 110.736 194.235 108.485 196.485C106.235 198.736 103.183 200 100 200C96.8174 200 93.7652 198.736 91.5147 196.485C89.2643 194.235 88 191.183 88 188V112H12C8.8174 112 5.76516 110.736 3.51472 108.485C1.26428 106.235 0 103.183 0 100C0 96.8174 1.26428 93.7652 3.51472 91.5147C5.76516 89.2643 8.8174 88 12 88H88V12C88 8.8174 89.2643 5.76516 91.5147 3.51472C93.7652 1.26428 96.8174 0 100 0C103.183 0 106.235 1.26428 108.485 3.51472C110.736 5.76516 112 8.8174 112 12V88H188C191.183 88 194.235 89.2643 196.485 91.5147C198.736 93.7652 200 96.8174 200 100Z"
                          fill={activeRotate ? '#ffc1c1' : '#c1e7ff'}
                        />
                      </svg>
                    </div>
                    <li
                      value={0}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(360deg) ${
                              menuActive === 0
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#FEFF00',
                        background: '',
                        border: '2px solid #FEFF00',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#FEFF00';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #FEFF00, 0 0 20px #FEFF00, 0 0 30px #FEFF00';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#FEFF00';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(4);
                        if (menuKey === 'JS') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('JS');
                          setMenuValue(1);
                          setMenuActive(0);
                        }
                      }}
                    >
                      <div>JS</div>
                    </li>
                    <li
                      value={1}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(45deg) ${
                              menuActive === 1
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#04fc43',
                        border: '2px solid #04fc43',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#04fc43';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #04fc43, 0 0 20px #04fc43, 0 0 30px #04fc43';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#04fc43';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(4);
                        if (menuKey === 'Py') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('Py');
                          setMenuValue(2);
                          setMenuActive(1);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-45deg)`,
                        }}
                      >
                        Py
                      </div>
                    </li>
                    <li
                      value={2}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(90deg) ${
                              menuActive === 2
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#fea200',
                        border: '2px solid #fea200',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#fea200';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #fea200, 0 0 20px #fea200, 0 0 30px #fea200';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#fea200';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(3);
                        if (menuKey === 'Java') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('Java');
                          setMenuValue(3);
                          setMenuActive(2);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-90deg)`,
                        }}
                      >
                        Java
                      </div>
                    </li>
                    <li
                      value={3}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(135deg) ${
                              menuActive === 3
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#1D38FF',
                        border: '2px solid #1D38FF',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#1D38FF';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #1D38FF, 0 0 20px #1D38FF, 0 0 30px #1D38FF';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#1D38FF';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(3);
                        if (menuKey === 'C/C++') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('C/C++');
                          setMenuValue(4);
                          setMenuActive(3);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-135deg)`,
                        }}
                      >
                        C/C++
                      </div>
                    </li>
                    <li
                      value={4}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(180deg) ${
                              menuActive === 4
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#00b0fe',
                        border: '2px solid #00b0fe',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#00b0fe';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #00b0fe, 0 0 20px #00b0fe, 0 0 30px #00b0fe';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#00b0fe';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(3);
                        if (menuKey === 'R') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('R');
                          setMenuValue(5);
                          setMenuActive(4);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-180deg)`,
                        }}
                      >
                        R
                      </div>
                    </li>
                    <li
                      value={5}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(225deg) ${
                              menuActive === 5
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#ff2972',
                        border: '2px solid #ff2972',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#ff2972';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #ff2972, 0 0 20px #ff2972, 0 0 30px #ff2972';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#ff2972';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(1);
                        if (menuKey === 'SQL') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('SQL');
                          setMenuValue(6);
                          setMenuActive(5);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-225deg)`,
                        }}
                      >
                        SQL
                      </div>
                    </li>
                    <li
                      value={6}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(270deg) ${
                              menuActive === 6
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#FF539D',
                        border: '2px solid #FF539D',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#FF539D';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #FF539D, 0 0 20px #FF539D, 0 0 30px #FF539D';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#FF539D';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(4);
                        if (menuKey === 'HTML') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('HTML');
                          setMenuValue(7);
                          setMenuActive(6);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-270deg)`,
                        }}
                      >
                        HTML
                      </div>
                    </li>
                    <li
                      value={7}
                      clr={'#ff2972'}
                      style={{
                        transform: activeRotate
                          ? `rotate(315deg) ${
                              menuActive === 7
                                ? 'translateX(-55px)'
                                : 'translateX(-35px)'
                            }`
                          : 'rotate(0deg) translateX(110px)',
                        transition: 'transform 1.25s ease',
                        color: '#FF531D',
                        border: '2px solid #FF531D',
                        borderRadius: '50%',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#FF531D';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = 'rgba(0, 0, 0, 0.5)';
                        e.target.style.boxShadow =
                          '0 0 10px #FF531D, 0 0 20px #FF531D, 0 0 30px #FF531D';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.borderRadius = '50%';
                        e.target.style.color = '#FF531D';
                        e.target.style.boxShadow = '';
                      }}
                      onClick={(e) => {
                        setMenuScore(4);
                        if (menuKey === 'CSS') {
                          setMenuKey(menuKeyDefault);
                          setMenuValue(menuValueDefault);
                          setMenuActive(-1);
                        } else {
                          setMenuKey('CSS');
                          setMenuValue(8);
                          setMenuActive(7);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(-315deg)`,
                        }}
                      >
                        CSS
                      </div>
                    </li>
                  </ul>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: '2',
                }}
              >
                <Reveal>
                  <Box
                    sx={{
                      typography: 'h3',
                      // fontSize: '3rem',
                      fontWeight: 'bold',
                      marginBottom: '2rem',
                      flex: '10',
                    }}
                  >
                    {activeRotate ? menuKey : menuKeyDefault}
                  </Box>
                </Reveal>

                {menuActive !== -1 && activeRotate ? (
                  <StrengthMeter score={menuScore} />
                ) : (
                  <></>
                )}

                <Reveal>
                  <Box
                    sx={{
                      typography: 'h6',
                      // fontSize: '3rem',
                      fontWeight: 'bold',
                      marginTop:
                        menuActive !== -1 && activeRotate ? '2rem' : '',
                      flex: '10',
                      paddingRight: '6rem',
                    }}
                  >
                    {activeRotate ? menuValue : menuValueDefault}
                  </Box>
                </Reveal>
              </Box>
            </Box>
            {/* </RevealUp> */}
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: mode !== 'dark' ? '#faf0e6' : '#101318',
            width: '100%',
            height: '30vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '5rem',
          }}
        >
          <Reveal>
            <Box
              className="title"
              sx={{
                typography: 'h2',
                fontWeight: 'bold',
              }}
            >
              <span
                style={{
                  // fontFamily: 'Verdana',
                  color: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                }}
              >
                Recent Projects
              </span>
            </Box>
          </Reveal>
          <Reveal>
            <Box
              className="title"
              sx={{
                backgroundColor: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                height: '0.5rem',
                width: '5rem',
                margin: '1rem',
              }}
            ></Box>
          </Reveal>

          <Box
            sx={{
              width: '80vw',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '5rem',
              display: 'none',
            }}
          >
            <div className="">
              <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Meteors because they&apos;re cool
                  </h1>

                  <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                    I don&apos;t know what to write so I&apos;ll just paste
                    something cool here. One more sentence because lorem ipsum
                    is just unacceptable. Won&apos;t ChatGPT the shit out of
                    this.
                  </p>

                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    Explore
                  </button>

                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
            <div className="">
              <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Meteors because they&apos;re cool
                  </h1>

                  <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                    I don&apos;t know what to write so I&apos;ll just paste
                    something cool here. One more sentence because lorem ipsum
                    is just unacceptable. Won&apos;t ChatGPT the shit out of
                    this.
                  </p>

                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    Explore
                  </button>

                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
            <div className="">
              <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Meteors because they&apos;re cool
                  </h1>

                  <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                    I don&apos;t know what to write so I&apos;ll just paste
                    something cool here. One more sentence because lorem ipsum
                    is just unacceptable. Won&apos;t ChatGPT the shit out of
                    this.
                  </p>

                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    Explore
                  </button>

                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </Box>
          {/* <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
          >
            <SwiperSlide>
              <img src={Bees} alt="slide_image"></img>
            </SwiperSlide>
          </Swiper> */}
          {/* <Example /> */}
        </Box>
        <Box>
          {/* <Example></Example> */}
          {/* <Slider></Slider> */}
        </Box>
        <Box
          sx={{
            backgroundColor: mode !== 'dark' ? '#faf0e6' : '#161b22',
            width: '100%',
            height: '220vh',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '5rem',
          }}
        >
          <Reveal>
            <Box
              className="title"
              sx={{
                typography: 'h2',
                fontWeight: 'bold',
              }}
            >
              <span
                style={{
                  // fontFamily: 'Verdana',
                  color: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                }}
              >
                Other Projects
              </span>
            </Box>
          </Reveal>
          <Reveal>
            <Box
              className="title"
              sx={{
                backgroundColor: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                height: '0.5rem',
                width: '5rem',
                margin: '1rem',
                marginBottom: '2rem',
              }}
            ></Box>
          </Reveal>
          <Box
            sx={{
              width: '80vw',
              display: 'flex',
              justifyContent: 'space-around',
              margin: '1rem',
            }}
          >
            <RevealUp>
              <div className="">
                <div className=" w-full relative max-w-sm">
                  <div className="absolute inset-0 h-80 w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-none blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-80 overflow-hidden rounded-sm flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      Meteors because they&apos;re cool
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      I don&apos;t know what to write so I&apos;ll just paste
                      something cool here. One more sentence because lorem ipsum
                      is just unacceptable. Won&apos;t ChatGPT the shit out of
                      this.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                      Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </RevealUp>
            <RevealUp>
              <div className="">
                <div className=" w-full relative max-w-sm">
                  <div className="absolute inset-0 h-80 w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-none blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-80 overflow-hidden rounded-sm flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      Meteors because they&apos;re cool
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      I don&apos;t know what to write so I&apos;ll just paste
                      something cool here. One more sentence because lorem ipsum
                      is just unacceptable. Won&apos;t ChatGPT the shit out of
                      this.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                      Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </RevealUp>
            <RevealUp>
              <div className="">
                <div className=" w-full relative max-w-sm">
                  <div className="absolute inset-0 h-80 w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-none blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-80 overflow-hidden rounded-sm flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      Meteors because they&apos;re cool
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      I don&apos;t know what to write so I&apos;ll just paste
                      something cool here. One more sentence because lorem ipsum
                      is just unacceptable. Won&apos;t ChatGPT the shit out of
                      this.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                      Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </RevealUp>
          </Box>
          <Box>
            <RevealUp>
              <div className="">
                <div className=" w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      Meteors because they&apos;re cool
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      I don&apos;t know what to write so I&apos;ll just paste
                      something cool here. One more sentence because lorem ipsum
                      is just unacceptable. Won&apos;t ChatGPT the shit out of
                      this.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                      Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </RevealUp>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: '#101318',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '3rem',
          }}
        >
          <meteorCard />
          <Reveal>
            <Box
              className="title"
              sx={{
                typography: 'h2',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  // fontFamily: 'Verdana',
                  color: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                }}
              >
                Contact
              </span>
            </Box>
          </Reveal>
          <Reveal>
            <Box
              className="title"
              sx={{
                backgroundColor: mode === 'dark' ? '#b7f3ff' : '#eb78a9',
                height: '0.5rem',
                width: '5rem',
                margin: '1rem',
              }}
            ></Box>
          </Reveal>
        </Box>
      </Box>
      {/* <div
        href="/"
        style={{
          transform: `rotate(-0deg)`,
        }}
      >
        ^
      </div> */}
    </Box>
  );
};

export default Landing;
