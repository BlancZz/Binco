import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
// import Maths from './Maths';
// import Connect from './Connect';
import MessagePage from './components/msger/MessagePage';
import Whiteboard from './components/whiteboard/Whiteboard';
import WhiteboardPage from './components/whiteboard/WhiteboardPage';

const PageList = () => {
  // localStorage.setItem('won', 0)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='/game/math' element={<Maths/>} />*/}
        <Route path="/whiteboard" element={<WhiteboardPage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </>
  );
};

export default PageList;
