import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BrowserBackground from './BrowserBackground.svg';
import BrowserWindow from './components/BrowserWindow';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import NavBar from './NavBar';
import { useTheme } from './ThemeContext';

import sprockets from './assets/sprockets.png';

function Dashboard() {
  const navigate = useNavigate();
  const { mode } = useTheme();

  const [popOpen, setPopOpen] = useState(false);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          padding: '1rem',
          paddingTop: '5rem',
          bgcolor: mode === 'light' ? '#eabef3' : '#54418d',
        }}
        className="w-full h-full d-flex flex-column align-items-center"
      >
        <Box
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <BrowserWindow>
            <Card
              id="dashboard-form"
              className="d-flex justify-content-center align-items-center"
              onClick={() => {
                navigate('/Quotes');
              }}
              sx={{ cursor: 'pointer' }}
            >
              <img
                id="popCard"
                style={{
                  maxWidth: '100%',
                  overflow: 'hidden',
                }}
                onMouseEnter={() => {
                  setPopOpen(true);
                }}
                onMouseLeave={() => {
                  setPopOpen(false);
                }}
                src={
                  popOpen
                    ? require('./assets/popQuoteCardOpen.png')
                    : require('./assets/popQuoteCardClosed.png')
                }
              />
            </Card>
          </BrowserWindow>
          <BrowserWindow>
            <Card
              id="dashboard-form"
              className="d-flex justify-content-center align-items-center"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://gx.games/games/xinz3a/sprocks/tracks/9c1d499d-51de-416f-a689-f74c62edb08c/'
                );
              }}
            >
              <img
                style={{
                  maxWidth: '100%',
                  overflow: 'hidden',
                }}
                sx={{ overflow: 'hidden' }}
                src={require('./assets/sprockets.png')}
                alt="Sprockets  "
              />
            </Card>
          </BrowserWindow>
          <BrowserWindow>
            <Card
              id="dashboard-form"
              className="d-flex justify-content-center align-items-center"
              onClick={() => {
                navigate('/Lover');
              }}
              sx={{ cursor: 'pointer' }}
            >
              <h1>WIP - Wasting time with you</h1>
            </Card>
          </BrowserWindow>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
