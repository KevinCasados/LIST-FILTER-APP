import React from 'react';
import "./style.css"

const SearchBox = ({ setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <input className='search_box'
      type="text"
      placeholder="Filtrar Películas..."
      onChange={handleChange}
    />
  );
};

export default SearchBox;