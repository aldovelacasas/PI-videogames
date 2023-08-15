import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getByName, filterByName, sortByRating,/* getAllGenres, filterByGenres, byOriginFilter*/ } from '../../redux/action/action';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';

import './home.styles.css';


function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allVideogames.slice(indexOfFirstItem, indexOfLastItem);
    
    useEffect(() => {
    dispatch(getVideogames());
   }, [dispatch,]);

 

  const handleSort =(event) => {
        event.preventDefault();
        dispatch(filterByName(event.target.value)); 
      }
    
  const handleSearch = (searchTerm) => {
    dispatch(getByName(searchTerm));

  };
  const handleSortByRating = (value) => {
    dispatch(sortByRating(value));
};

  function nextPage() {
  setCurrentPage((prevPage) => prevPage + 1);
}

  function prevPage() {
  setCurrentPage((prevPage) => prevPage - 1);
}

  return (
    <div className="home">
        <h2 className="home-title">Home</h2>

    <div className='navbar-container'>
      <Navbar  handleSearch={handleSearch} />
      <div className='button-container'>
    </div>
   </div>
   <div className='button-form'>
       <Link to="/form"><button>Formulario</button></Link>
   </div>  
      
<div>
  <select placeholder="A-Z" onChange={handleSort} > 
    <option hidden="all">Ordenar de A-Z</option>
    <option value="Asc">{" "}A-Z{" "}</option>
    <option value="Desc">{" "}Z-A{" "}</option>
  </select>
</div>

    


<div>
  <select onChange={(e) => handleSortByRating(e.target.value)}>
    <option hidden>Ordenar por Rating</option>
    <option value="RatingAsc">Rating Ascendente</option>
    <option value="RatingDesc">Rating Descendente</option>
  </select>
</div>

      
      <Cards allVideogames={currentItems} />
<div className='button'>
  <button onClick={prevPage} disabled={currentPage === 1}>
    Prev
  </button>

  <span>{currentPage}</span>
  <button onClick={nextPage} disabled={indexOfLastItem >= allVideogames.length}>
    Next
  </button>
</div>




    




    

   




      
    </div>
  );
}

export default Home;
