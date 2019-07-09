import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'

function App() {

  //callback function 
  const counter = useSelector(state => state.counter )
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        {/* just need to pass the action type */}
        <button onClick={(()=> dispatch({type:"INCREMENT"}))}>INCREMENT</button>
        <button onClick={(()=> dispatch({type:"DECREMENT"}))}>DECREMENT</button>
      </header>
    </div>
  );
}

export default App;
