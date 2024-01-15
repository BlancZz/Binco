import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// /* <ul>
//   <li><img id='favicon' src="/favicon.ico" alt="logo"></img></li>
//   <li><a href="/dashboard">Dashboard</a></li>
//   <li><a href="/game/math">Math</a></li>
//   <li><a href="contact.asp">Contact</a></li>
//   <li><a href="about.asp">About</a></li>
// </ul> */

const NavBar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: '#eb78a9',
        paddingLeft: '2rem',
        paddingRight: '1rem',
        height: '4rem',
        fontWeight: 'bolder',
        fontSize: '1.1rem',
        position: 'fixed',
        top: '0',
        zIndex: '9',
      }}
    >
      <a class="navbar-brand" href="#">
        Brisk
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to={'/dashboard'} class="nav-link">
              Dashboard
            </Link>
          </li>
          <li class="nav-item">
            <Link to={'/message'} class="nav-link">
              Message
            </Link>
          </li>
          <li class="nav-item">
            <Link to={'/whiteboard'} class="nav-link">
              Whiteboard
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              WIP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
  // return <nav className="flex">
  //   <div className="box">
  //     <Link to={'/'}>
  //       <img id="favicon" src="/favicon.ico" alt="logo"></img>
  //     </Link>
  //   </div>
  //   <div className="box">
  //     <Link to={'/dashboard'}>
  //       <p id="dashboard-text"><span>Dashboard</span></p>
  //     </Link>
  //   </div>
  //   <div className="box">
  //     <Link to={'/message'}>
  //     <p id="message-text"><span>Message</span></p>
  //     </Link>
  //   </div>
  //   <div className="box">
  //     <Link to={'/game/jump'}>
  //       <p id="whiteboard-text"><span>Whiteboard</span></p>
  //     </Link>
  //   </div>
  //   <div className="box">
  //     <Link to={'/game/wip'}>
  //       <p id="wip-text"><span>uhh WIP</span></p>
  //     </Link>
  //   </div>
  // </nav>
};

export default NavBar;
