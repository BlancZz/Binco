import React from "react";
import { Link } from "react-router-dom";

// /* <ul>
//   <li><img id='favicon' src="/favicon.ico" alt="logo"></img></li>
//   <li><a href="/dashboard">Dashboard</a></li>
//   <li><a href="/game/math">Math</a></li>
//   <li><a href="contact.asp">Contact</a></li>
//   <li><a href="about.asp">About</a></li>
// </ul> */

const NavBar = () => {
  return <nav className="flex">
    <div className="box">
      <Link to={'/'}>
        <img id="favicon" src="/favicon.ico" alt="logo"></img>
      </Link> 
    </div>
    <div className="box">
      <Link to={'/dashboard'}>
        <p id="dashboard-text"><span>Dashboard</span></p>
      </Link>
    </div>
    <div className="box">
      <Link to={'/message'}>
      <p id="message-text"><span>Message</span></p>
      </Link>
    </div>
    <div className="box">
      <Link to={'/game/jump'}>
        <p id="whiteboard-text"><span>Whiteboard</span></p>
      </Link>
    </div>
    <div className="box">
      <Link to={'/game/wip'}>
        <p id="wip-text"><span>uhh WIP</span></p>
      </Link>
    </div>
  </nav>
};

export default NavBar;