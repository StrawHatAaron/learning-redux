import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function ReduxWrapper(){

  //callback function 
  const counter = useSelector(state => state.counter)
  const dispatchCounter = useDispatch()

  const status = useSelector(state => state.status)
  const dispatchStatus = useDispatch()

    return(
        <div>
        <h1>Status: {status}</h1>
        <button onClick={(()=> dispatchStatus({type:'R'}))}>Change to in Relationship</button>

        <hr/>

        <h1>Counter: {counter}</h1>
        {/* just need to pass the action type and it knows*/}
        <button onClick={(()=> dispatchCounter({type:"INCREMENT"}))}>INCREMENT</button>
        <button onClick={(()=> dispatchCounter({type:"DECREMENT"}))}>DECREMENT</button>
      </div>
    )
}

export default ReduxWrapper