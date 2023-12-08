import React, { useState, useEffect } from 'react';
import SongItem from './SongItem';
import AddSongModal from './AddSongModal';
import Header from './Header';
import { Table } from 'react-bootstrap';
import './SongList.css';
import Player from './Player'; 


const SongsListingPage = () => {
  const [songs, setSongs] = useState(() => {
    const storedSongs = localStorage.getItem('songs');
    return storedSongs ? JSON.parse(storedSongs) : [];
  });

  const [showAddSongModal, setShowAddSongModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const addSong = (song) => {
    const currentDate = new Date().toLocaleDateString();
    const songWithDate = { ...song, addedOn: currentDate };
    setSongs((prevSongs) => [...prevSongs, songWithDate]);
    setShowAddSongModal(false);
  };

  const deleteSong = (index) => {
    const updatedSongs = [...songs];
    updatedSongs.splice(index, 1);
    setSongs(updatedSongs);
  };

  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  const playSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="container mt-2" style={{ marginLeft: '150px', marginTop: '0px', paddingTop: '20px' }}>
      <Header onAddSongClick={() => setShowAddSongModal(true)} />
      <div className="table-container">
        <Table striped bordered hover responsive style={{ width: '732px', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Song Name</th>
              <th style={{ width: '10%' }}></th>
              <th style={{ width: '20%' }}>Song Source</th>
              <th style={{ width: '20%' }}>Added On</th>
              <th className="play-column"></th>
              <th className="delete-column"></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index} style={{ backgroundColor: 'white' }}>
                <SongItem
                  title={song.title}
                  url={song.url}
                  source={song.source}
                  thumbnail={song.thumbnail}
                  addedOn={song.addedOn}
                  onPlayClick={() => playSong(song)}
                  onDelete={() => deleteSong(index)}
                />
              </tr>
            ))}
          </tbody>
          {selectedSong && (
        <div style={{ marginTop: '20px' }}>
          {selectedSong.thumbnail && (
            <div>
              <img
                src={selectedSong.thumbnail}
                alt="Selected Song Thumbnail"
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <span>{selectedSong.title}</span>
            </div>
          )}
          
            <source src={selectedSong.url}  />
            
          <Player selectedSong={selectedSong} songs={songs} setSelectedSong={setSelectedSong} />

        </div>
      )}
        </Table>
      </div>
      
      {showAddSongModal && (
        <AddSongModal
          showModal={showAddSongModal}
          onClose={() => setShowAddSongModal(false)}
          onAddSong={addSong}
        />
      )}
    </div>
  );
};

export default SongsListingPage;
