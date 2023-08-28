import React from "react";
import cl from './Watch.module.css'
import Button from "./UI/button/Button";


const Watch = () => {
     return (
        <div className={cl.watch}>
            <div className={cl.watch_circle}>
            </div>
            <div className={cl.watch_text}>
            </div> 
            
            <Button>Watch online</Button>
        </div>
    );
};

export default Watch;