import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getByName } from '../../redux/action/action';
import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';
import LandingPage from '../LandinPage/LandingPage';

import './home.styles.css';

function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);

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
      <Cards allVideogames={allVideogames} />
      
    </div>
  );
}

export default Home;
