import React from 'react';
import Navbar from './components/UI/navbar/Navbar';
import Panda from './components/sections/Panda';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Backstage from './components/sections/Backstage';

function App() {
  return (
    <BrowserRouter>
      <Panda/>
      <Backstage/>
    </BrowserRouter>
    
  );
}

export default App;
