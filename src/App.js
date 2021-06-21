import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import avengers from './dummyData';
import AvengersList from './components/AvengersList';
import Home from './components/Home';
import Avenger from './components/Avenger';




function App() {

  

  return (
    <div>
      <nav className='navbar'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/avengers'>Avengers</Link>
          </li>
      </nav>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/avengers/:hero'>
          <Avenger key={avengers.id} hero={avengers} />
        </Route>
        <Route path='/avengers'>
          <AvengersList heroes={avengers} />
        </Route> 
      </Switch>
    </div>
    </div>
  );

}

export default App;
