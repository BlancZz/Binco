import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
// import Maths from './Maths';
// import Connect from './Connect';
import Message from './Message';

const PageList = () => {
  // localStorage.setItem('won', 0)
  return <>
    <NavBar />
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      {/* <Route path='/game/math' element={<Maths/>} />*/}
      {/* <Route path='/whiteboard' element={<Whiteboard/>} /> */}
      <Route path='/message' element={<Message/>} />
    </Routes>
  </>
}

export default PageList;