/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Gif = ({ gifID, changeSelectedID }) => {
  // const gifID ="gG6OcTSRWaSis";
  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
  const handleClick = () => {
    // console.log("click")
    // we want to change the selected gif -> setSelectedID
    changeSelectedID(gifID);
  };
  return (
    // now we want to click on the image and change the selected gif = eventListener
    <img
      src={url}
      alt="gif"
      className="gif"
      onClick={handleClick} //callling the function on click
    />
  );
};

export default Gif;
