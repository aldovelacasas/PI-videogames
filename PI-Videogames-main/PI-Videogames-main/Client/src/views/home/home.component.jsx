import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/action/action';

import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';

import './home.styles.css';

function Home() {
const dispatch = useDispatch();
const allVideogames = useSelector((state) => state.allVideogames);
const [searchString, setSearchString] = useState("");



  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

// filtrado con el backend

  function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(searchString))
  }


useEffect(() =>{
    dispatch(getVideogames())
}, [dispatch]) //buscar de donde viene 

  return (
    <div className="home">
      <h2 className='home-title'>Home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allVideogames={allVideogames} />


    </div>
  );
}

export default Home;
