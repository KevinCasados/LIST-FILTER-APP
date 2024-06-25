import React from 'react';
import "./style.css"

const AddMoreBtn = ({ loadMoreMovies }) => {
  return (
    <button onClick={loadMoreMovies} className="load-more_button load_more">
      Cargar más
    </button>
  );
};

export default AddMoreBtn;