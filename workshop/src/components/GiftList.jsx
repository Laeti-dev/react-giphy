import React from 'react';
import Gif from './Gif';

const GiftList = ({ gifIDs, changeSelectedID }) => {
  return (
    <div className="gif-list">
      {gifIDs.map((id) => <Gif gifID={id} key={id} changeSelectedID={changeSelectedID} />)}
    </div>
  );
};

export default GiftList;
