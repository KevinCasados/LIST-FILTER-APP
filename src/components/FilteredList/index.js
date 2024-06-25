import React from 'react';
import "./style.css"
import AddMoreBtn from '../../AddMoreBtn';

const FilteredList = ({ items, searchText }) => {
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
    <ul className="movie_list">
      {filteredItems.map((item) => (
        <li key={item.id} className="movie_item">
          <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
          <p className='movie_name'>{item.title}</p>
        </li>
      ))}
    </ul>
    <AddMoreBtn/>
    </>
  );
};

export default FilteredList;