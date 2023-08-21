import React from 'react';
import Navbar from './components/UI/navbar/Navbar';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
    
  );
}

export default App;
