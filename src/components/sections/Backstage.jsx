import React from "react";
import cl from './Backstage.module.css'


const Backstage = () => {
     return (
        <div className={cl.backstage}>
            <div className={cl.backstage_content}>
                <div className={cl.picture}></div>
                <div className={cl.text}>
                    <h1>The Backstage of the Wilderness World.</h1>
                    <p>The site was founded on the basis of a volunteer movement to protect and care for animals.</p>
                    <h2>How it works </h2>
                    <p>The main goal is to help the animals, as well as the nature reserves and zoos where they are kept. 
                        We are currently working on video projects targeting pandas in China, eagles on an island near Los Angeles, 
                        alligators in Florida and gorillas in the Congo. These have a total of more than 1,500 mammals and reptiles.
                    </p>
                </div>
            </div>
            <div className={cl.flowers}></div>
        </div>
    );
};

export default Backstage;