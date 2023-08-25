import React from 'react';
import Navbar from './components/UI/navbar/Navbar';
import Panda from './sections/Panda';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Panda/>
    </BrowserRouter>
    
  );
}

export default App;
