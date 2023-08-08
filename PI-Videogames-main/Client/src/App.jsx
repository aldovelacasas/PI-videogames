import React from 'react';
import {Route, Routes} from "react-router-dom"
import LandingPage from './views/LandinPage/LandingPage';
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Form from './views/form/form.component';

import './App.css';

function App() {
  return (
    
    <div >
      <Routes>
      <Route path='/landingpage' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
