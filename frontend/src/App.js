// 'use client';
// import './App.css';
// import React from 'react';
// import NavBar from './NavBar';
// // import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// // import pop from './assets/pop.png';
// import popAudio1 from './assets/audio/pop1_c.mp3';
// import popAudio2 from './assets/audio/pop2.mp3';
// import { useTheme } from './ThemeContext';
// import quotes_file from './quotes.txt';

// import DrawOutlineButton from './components/ui/drawOutlineButton';
// import Modal from './components/ui/modal';
// function App() {
//   // const navigate = useNavigate();
//   const { mode } = useTheme();

//   const [mouseDown, setMouseDown] = React.useState(false);
//   // let popVariation = true;

//   function playPop() {
//     generateQuote();
//     setMouseDown(true);
//     // if (popVariation) {
//     new Audio(popAudio1).play();
//     // } else {
//     //   new Audio(popAudio2).play();
//     // }
//     // popVariation = !popVariation;
//     setNumClicks(numClicks + 1);
//   }

//   const [quotes, setQuotes] = React.useState([]);
//   const [quote, setQuote] = React.useState('Click! (^._.^)ノ');
//   const [seen, setSeen] = React.useState([]);
//   const [seenAll, setSeenAll] = React.useState(false);
//   const [currentPointer, setCurrentPointer] = React.useState(-1);

//   React.useEffect(() => {
//     fetch(quotes_file)
//       .then((r) => r.text())
//       .then((text) => {
//         setQuotes(
//           text
//             .split('/')
//             .filter((subArray) => subArray.length > 0)
//             .map((s) => s.replaceAll('\n', ''))
//         );
//       });
//   }, []);

//   function generateQuote() {
//     if (seen.length >= quotes.length) {
//       setQuote('smol brain, no more quotes, contribute quote for us?');
//       setSeenAll(true);
//       setCurrentPointer(seen.length);
//       return;
//     }

//     let newInt = -1;
//     do {
//       newInt = Math.floor(Math.random() * quotes.length);
//     } while (seen.includes(newInt));

//     seen.push(newInt);
//     setSeen(seen);
//     setQuote(quotes[newInt]);
//     setCurrentPointer(seen.length - 1);
//     setNumQuotes(numQuotes + 1);

//     console.log(newInt + ': ' + quote);
//   }

//   function backwardQuote() {
//     console.log('quote index: ' + currentPointer);

//     setSeenAll(false);
//     if (currentPointer <= 0) {
//       setQuote("can't time travel before the first quote >_<");
//       setCurrentPointer(-1);
//     } else {
//       setQuote(quotes[seen[currentPointer - 1]]);
//       setCurrentPointer(currentPointer - 1);
//     }
//   }

//   function forwardQuote() {
//     console.log('quote index: ' + currentPointer);

//     if (currentPointer === seen.length - 1) {
//       playPop();
//     } else if (currentPointer === quotes.length) {
//       setSeenAll(true);
//     } else {
//       setQuote(quotes[seen[currentPointer + 1]]);
//       setCurrentPointer(currentPointer + 1);
//     }
//   }

//   const [numClicks, setNumClicks] = React.useState(0);
//   const [numQuotes, setNumQuotes] = React.useState(0);

//   return (
//     <body>
//       <div class="wave"></div>
//       <div class="wave"></div>
//       {/* <div class="wave"></div> */}
//       <Box
//         sx={{
//           // backgroundColor: '#fff9c4',
//           height: '100vh',
//           width: '100vw',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexDirection: 'column',
//         }}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '1%',
//             left: '10%',
//             typography: 'h3',
//             margin: '2rem',
//           }}
//         >
//           <title>PopQuote</title>
//         </Box>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: '20%',
//             margin: '2rem',
//             opacity: '20%',
//             // color: '#448Aff',
//             '&:hover': {
//               opacity: '50%',
//             },
//           }}
//         >
//           ( hover title )
//         </Box>
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             margin: '2rem',
//             fontSize: '1.5rem',
//             opacity: '70%',
//           }}
//         >
//           <Box>
//             <Box>Clicks: {' ' + numClicks}</Box>
//             <Box>Quotes: {' ' + numQuotes}</Box>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             cursor: 'pointer',
//             textAlign: 'center',
//             fontSize: '2rem',
//             width: '70%',
//           }}
//           onMouseDown={() => {
//             playPop();
//           }}
//           onMouseUp={() => {
//             setMouseDown(false);
//           }}
//         >
//           {/* highlight colour previously bg-yellow-300*/}
//           <div class="selection:bg-[#C3B1E1]">{quote}</div>
//         </Box>
//         <Box
//           sx={{
//             margin: '1rem',
//             width: '20%',
//             display: 'flex',
//             position: seenAll ? 'static' : 'absolute',
//             top: 0,
//             right: 0,
//             justifyContent: 'space-around',
//           }}
//         >
//           <Modal />
//           <button
//             onClick={(e) => {
//               // e.preventDefault();
//               setQuote('ok quotes reset!');
//               setSeen([]);
//               setSeenAll(false);
//               setCurrentPointer(-1);
//             }}
//             className="bg-gradient-to-r from-violet-500 to-red-400 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
//           >
//             Reset :T
//           </button>
//         </Box>
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: 0,
//             cursor: 'pointer',
//           }}
//           onMouseDown={() => {
//             playPop();
//           }}
//           onMouseUp={() => {
//             setMouseDown(false);
//           }}
//         >
//           {/* <Button
//             onClick={(e) => {
//               setSeenAll(true);
//             }}
//           >
//             end debugging
//           </Button> */}
//           <img
//             class="popcat"
//             src={
//               mouseDown
//                 ? require('./assets/cat.png')
//                 : require('./assets/pop.png')
//             }
//             width={250}
//             height={250}
//             alt="pop cat"
//           />
//         </Box>
//         <Box
//           sx={{
//             position: 'absolute',
//             left: '5%',
//           }}
//           onClick={() => {
//             backwardQuote();
//           }}
//         >
//           <DrawOutlineButton>
//             <svg
//               fill="#000000"
//               height="50px"
//               width="50px"
//               version="1.1"
//               id="Layer_1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               viewBox="0 0 330 330"
//               xmlSpace="preserve"
//               transform="matrix(-1, 0, 0, 1, 0, 0)"
//             >
//               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               ></g>
//               <g id="SVGRepo_iconCarrier">
//                 {' '}
//                 <path
//                   id="XMLID_27_"
//                   d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
//                 ></path>{' '}
//               </g>
//             </svg>
//           </DrawOutlineButton>
//         </Box>
//         <Box
//           sx={{
//             position: 'absolute',
//             right: '5%',
//           }}
//           onMouseDown={() => {
//             forwardQuote();
//           }}
//           onMouseUp={() => {
//             setMouseDown(false);
//           }}
//         >
//           <DrawOutlineButton>
//             <svg
//               fill="#000000"
//               height="50px"
//               width="50px"
//               version="1.1"
//               id="Layer_1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               viewBox="0 0 330 330"
//               xmlSpace="preserve"
//             >
//               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               ></g>
//               <g id="SVGRepo_iconCarrier">
//                 {' '}
//                 <path
//                   id="XMLID_27_"
//                   d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
//                 ></path>{' '}
//               </g>
//             </svg>
//           </DrawOutlineButton>
//         </Box>
//       </Box>
//     </body>
//   );
// }

// export default App;

import './App.css';
import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageList from './PageList';
import { ThemeContext } from './ThemeContext';
import Landing from './Landing';

function App() {
  return (
    <ThemeContext>
      <Landing />
    </ThemeContext>
  );
}

export default App;
