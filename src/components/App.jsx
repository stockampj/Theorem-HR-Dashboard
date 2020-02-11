import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import TestComponent from './TestComponent';
import MessageViewer from './MessageViewer';
import constants from './../constants';
import NewMessageForm from './NewMessageForm';
const { initialState, types, firebaseConfig } = constants;


function App(){
  return (
    <div>
      <h1>Hello</h1>
      <NavBar />
      <Switch>
        <Route exact path='/'  component={MessageViewer}/>
        <Route exact path='/messageform' component={NewMessageForm} />
      </Switch>
    </div>
  );
}

export default App;