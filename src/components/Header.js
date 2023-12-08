import React from 'react';
import { Button } from 'react-bootstrap';

const Header = ({ onAddSongClick }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',fontFamily:'Roboto' ,fontSize:'20' }}>
      <div>
        <h1>Song</h1>
      </div>
      <div>
        <Button variant="primary" onClick={onAddSongClick} style={{ marginLeft: '5px', backgroundColor:'#FDB927', color:'#000000' }}>
          Add Song
        </Button>
      </div>
    </header>
  );
};

export default Header;
