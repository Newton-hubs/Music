import React from 'react';
import { Link } from 'react-router-dom';
import songIcon from '../../src/Icons/Icons-consumer.png';  
import logoutIcon from '../../src/Icons/logout.png'; 
import './Leftmenu.css';

const LeftMenu = () => {
  return (
    <div className="col-md-3 position-fixed start-0 top-0 d-flex flex-column bg-light sidebar-style" >
      <ul className="list-group mt-0 mb-auto">
        <li className="list-group-item text-center bg-light">
          <h2 className="my-1" style={{ color: '#552583' }}>LOGO</h2>
        </li>
        <li className="list-group-item d-flex align-items-center">
          <img src={songIcon} alt="Songs Icon" className="mr-2" width="24" height="24" />
          <Link to="/songlist" className=" text-dec">Songs</Link>
        </li>
                
        <li className="list-group-item d-flex align-items-center mt-auto" style={{paddingTop:"400px"}}>
          <img src={logoutIcon} alt="Logout Icon" className="mr-2" width="24" height="24" />
          <Link to="/logout" className="text-decoration-none text-dark" >Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
