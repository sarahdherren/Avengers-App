import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/avengers.css';

const AvengersList = ({heroes}) => {

    return(
        <div>
        <h1>Avengers List</h1>
        <div className='characters-list-wrapper'> 
                {heroes.map(avenger => {
                   return (
                    <div  className='character-card'>
                            <img className='character-image-oval' alt={avenger.name} src={avenger.img} />
                        <Link to={`/avengers/${avenger.id}`}>
                            <h3>{avenger.name}</h3>
                        </Link>
                        
                   </div>
                    )
                })}
         </div>   
        </div>
    )
};

export default AvengersList;