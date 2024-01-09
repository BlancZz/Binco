// import React from 'react';
// import DiscordService from './services/DiscordService';
// import useForm from "./hook/useForm";
// import NavBar from './NavBar';
// let username = "Stephen";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{height: 100 + 'em'}} className='bg-light p-3 vh-100'>
      <h1>Dashboard</h1>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className="card p-3">
          <div id='dashboard-form' className="d-flex justify-content-center align-items-center">
            <form className="">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="name"
                  // value={sessionStorage.getItem('UserName')}
                  id="name-input"
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" />
                <div id="passwordHelp" className="form-text">(optional)</div>
              </div> */}
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                // disabled={!isValid}
                onClick={(e) => {
                  e.preventDefault();
                  sessionStorage.setItem('UserName', document.getElementById('name-input').value);
                  console.log(sessionStorage.getItem('UserName'));
                  navigate('/message');
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary btn-sm"
        // disabled={!isValid}
        onClick={(e) => {
          e.preventDefault();
          sessionStorage.removeItem('UserName');
          console.log("removed user");
          navigate('/message');
        }}
      >
        remove name
      </button>
      <footer className='position-fixed w-100 text-center p-3 b-0'>
        &copy; 2024 Cool Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
