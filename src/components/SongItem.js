import React from 'react';
import Icon from '../../src/Icons/Mask Group.png';
import Deletebtn from '../../src/Icons/icon.png';
import Playbtn from '../../src/Icons/Vector.png';

const SongItem = ({ title, url, source, addedOn, thumbnail, onPlayClick, onDelete }) => {
  return (
    <React.Fragment>
      <td>
        {thumbnail && (
          <div>
            <img
              src={Icon}
              alt="Song Thumbnail"
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            <span>{title}</span>
          </div>
        )}
      </td>
      <td>{url}</td>
      <td>{source}</td>
      <td>{addedOn}</td>
      <td>
        <img
          src={Playbtn}
          alt="Play"
          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
          onClick={() => onPlayClick()} 
        />
      </td>
      <td>
        <img
          src={Deletebtn}
          alt="Delete"
          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
          onClick={() => onDelete()} 
        />
      </td>
    </React.Fragment>
  );
};

export default SongItem;
