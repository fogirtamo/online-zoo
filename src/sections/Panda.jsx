import React from "react";
import Navbar from '../components/UI/navbar/Navbar';
import Watch from "../components/Watch";
import cl from './Panda.module.css'


const Panda = () => {
     return (
        <div className={cl.panda}>
            <Navbar/>
            <Watch/>
        </div>
    );
};

export default Panda;