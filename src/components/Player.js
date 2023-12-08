import React, { useState } from 'react';
import PlayPauseIcon from '../../src/Icons/pause.png';
import ForwardIcon from '../../src/Icons/Forward.png';
import BackwardIcon from '../../src/Icons/backward.png';

const Player = ({ selectedSong, songs, setSelectedSong }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    setCurrentTime(seekTime);
  };

  const handleForward = () => {
    if (!selectedSong) return; 

    const currentIndex = songs.findIndex((song) => song === selectedSong);
    const nextIndex = (currentIndex + 1) % songs.length; 

    setSelectedSong(songs[nextIndex]);
  };

  const handleBackward = () => {
    if (!selectedSong) return; 

    const currentIndex = songs.findIndex((song) => song === selectedSong);
    const backwardIndex = (currentIndex - 1 + songs.length) % songs.length; 

    setSelectedSong(songs[backwardIndex]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <div>
        
        <img
          src={BackwardIcon}
          alt="Backward"
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          onClick={handleBackward}
        />
        <img
          src={PlayPauseIcon}
          alt={isPlaying ? 'Pause' : 'Play'}
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          onClick={togglePlay}
        />
        <img
          src={ForwardIcon}
          alt="Forward"
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          onClick={handleForward}
        />
      </div>

      <input
        type="range"
        min="0"
        max="350"
        step="1"
        value={currentTime}
        onChange={handleSeek}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
};

export default Player;
