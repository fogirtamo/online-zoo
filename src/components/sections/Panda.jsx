import React from "react";
import Navbar from '../UI/navbar/Navbar';
import Watch from "../functional blocks/Watch";
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