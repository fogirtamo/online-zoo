import React, { Children } from "react";
import cl from './Button.module.css'


const Button = (props) => {
     return (
        <button className={cl.button}>
           {props.children}
        </button>
    );
};

export default Button;