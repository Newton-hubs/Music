import React, { useState, useRef } from 'react';

const AddSongModal = ({ showModal, onClose, onAddSong }) => {
  const [songTitle, setSongTitle] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [songSource, setSongSource] = useState('');
  const [profileThumbnail, setProfileThumbnail] = useState(null);
  const fileInputRef = useRef(null);

  const handleAddSong = () => {
    const newSong = { title: songTitle, url: songUrl, source: songSource, thumbnail: profileThumbnail };
    onAddSong(newSong);
    onClose();
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    setProfileThumbnail(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Song</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="songTitle" className="form-label">Song Name</label>
                <input type="text" className="form-control" id="songTitle" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="songUrl" className="form-label">Song Link</label>
                <input type="text" className="form-control" id="songUrl" value={songUrl} onChange={(e) => setSongUrl(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="songSource" className="form-label">Song Source</label>
                <input type="text" className="form-control" id="songSource" value={songSource} onChange={(e) => setSongSource(e.target.value)} />
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Click to upload Profile Thumbnail</button>
                <input
                  type="file"
                  className="form-control-file"
                  id="profileThumbnail"
                  onChange={handleThumbnailChange}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
              </div>
              {profileThumbnail && (
                <img
                  src={URL.createObjectURL(profileThumbnail)}
                  alt="Profile Thumbnail Preview"
                  style={{ width: '100%', marginTop: '10px' }}
                />
              )}
            </form>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary"style={{backgroundColor:'#D9D9D9' ,color:'black'}} onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={handleAddSong}>
              Add 
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSongModal;
