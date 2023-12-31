import React from "react";
import cl from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
 

    return (
        <div className={cl.navbar}>
            <div className={cl.menu}>
                <div className={cl.title}>
                    <Link to="/about">PetStory online</Link>
                </div>
                <Link to="/about">About</Link>
                <Link to="/map">Map</Link>
                <Link to="/zoos">Zoos</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/cantact">Contact us</Link>                
            </div>

            <div className={cl.designed}>
                <Link to="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online?type=design&node-id=0-1&mode=design&t=bIl0qssZblHrowDI-0">
                    Designed by ©
                </Link>
            </div>
        </div>
    );
};

export default Navbar;