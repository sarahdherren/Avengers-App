import React from 'react';
import { useParams, useRouteMatch, Route, NavLink, useHistory } from 'react-router-dom';
import Movies from "./Movies";

const Avenger = ({hero}) => {
    
    const params = useParams();
    const { path, url } = useRouteMatch();
    const history = useHistory();

    const heros = hero.find(item => item.id === Number(params.hero));

    return(
        <div>
        <div className="characters-list-wrapper">
            <div className='character-card'>
                        <img className='character.image' alt={heros.name} src={heros.thumbnail} />
                        <div className='charater-info-wrapper'>
                        <h2>{heros.name}</h2>
                        <h3>*{heros.nickname}*</h3>
                        <p>{heros.description}</p>
                        <nav className="nav-buttons">
                            <NavLink to={`${url}/movies`}>Movie List</NavLink>
                        </nav>
                        <Route path={`${path}/movies`}>
                            <Movies movieList={heros} />
                        </Route>
                        </div>
                   </div>
        </div>
        <button className='nav-buttons' onClick={() => history.goBack()}>back</button>
        </div>
    )
};

export default Avenger;