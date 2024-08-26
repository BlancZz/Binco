import { useNavigate } from 'react-router-dom';
import BrowserBackground from './BrowserBackground.svg';
import BrowserWindow from './components/BrowserWindow';
import Box from '@mui/material/Box';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full d-flex flex-column  align-items-center">
      <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
      <BrowserWindow>
        <div
          id="dashboard-form"
          className="d-flex justify-content-center align-items-center"
        >
          <form className="d-flex flex-column">
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
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                className="btn btn-primary btn-sm"
                // style={{ width: '15%' }}
                // disabled={!isValid}
                onClick={(e) => {
                  e.preventDefault();
                  sessionStorage.removeItem('UserName');
                  console.log('removed user');
                  navigate('/message');
                }}
              >
                remove name
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                // disabled={!isValid}
                onClick={(e) => {
                  e.preventDefault();
                  sessionStorage.setItem(
                    'UserName',
                    document.getElementById('name-input').value
                  );
                  console.log(sessionStorage.getItem('UserName'));
                  navigate('/message');
                }}
              >
                Submit
              </button>
            </Box>
          </form>
          {/* </div> */}
        </div>
      </BrowserWindow>
      {/* <footer className="position-fixed w-100 text-center p-3 b-0">
        &copy; 2024 Cool Website. All rights reserved.
      </footer> */}
    </div>
  );
}

export default Dashboard;
