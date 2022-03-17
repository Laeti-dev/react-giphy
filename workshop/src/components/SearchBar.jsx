import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    // event.currentTarget.value
    const { changeGifs } = props;
    changeGifs(event.currentTarget.value);
  };
  return (
    <input
      type="text"
      className="form-search form-control"
      placeholder="Search for a gif"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
