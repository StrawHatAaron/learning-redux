import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import ReduxWrapper from './ReduxWrapper'
import ReactUseReducer from './ReactUseReducer';

//how does it know what reducer it is pulling from??

function App() {


  return (
    <BrowserRouter className="App">
      <header>
        <a href='/ReactUseReducer'>useReducer and useContext </a>
        <br/>
        <a href='/ReduxWrapper'> 3rd party Redux library </a>
      </header>

      <Route exact path='/ReactUseReducer' component={ReactUseReducer}/>
      <Route exact path='/ReduxWrapper' component={ReduxWrapper}/>
    </BrowserRouter>
  );
}

export default App;
