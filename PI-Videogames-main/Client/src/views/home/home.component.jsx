import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getByName, filterByName } from '../../redux/action/action';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';

import './home.styles.css';

function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);

    function handleSort(event) {
        event.preventDefault();
        dispatch(filterByName(event.target.value)); 
      }

    useEffect(() => {
    dispatch(getVideogames());
  },[dispatch]);

    const handleSearch = (searchTerm) => {
    dispatch(getByName(searchTerm));


  };

  return (
    <div className="home">
        
        <h2 className="home-title">Home</h2>
      <Navbar handleSearch={handleSearch} />
        <br/>

        <Link to="/form">
      <button>formulario</button>
        </Link>

      <div>

    <select placeholder="A-Z" onChange={handleSort} > 
    <option hidden="all">A-Z</option>
    <option value="Asc">{" "}A-Z{" "}</option>
    <option value="Desc">{" "}Z-A{" "}</option>
    </select>

    </div>

      <Cards allVideogames={allVideogames} />
      
    </div>
  );
}

export default Home;
