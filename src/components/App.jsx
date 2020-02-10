import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import TestComponent from './TestComponent';
import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;


function App(){
  return (
    <div>
      <h1>Hello</h1>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/testPath' component={TestComponent} />
      </Switch>
    </div>
  );
}

export default App;