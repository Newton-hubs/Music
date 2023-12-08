import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Otpverification from './components/Otpverification';
import SongsListingPage from './components/SongList';
import LeftMenu from './components/Leftmenu';
import AddSongModal from './components/AddSongModal';

const App = () => {
  const [showLeftMenu, setShowLeftMenu] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/verify-otp" element={<Otpverification />} />
        <Route
          path="/songlist"
          element={
            <div className="container-fluid">
              {showLeftMenu && <LeftMenu />}
              <SongsListingPage />
            </div>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
