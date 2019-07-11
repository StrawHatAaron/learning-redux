import React, {useReducer} from 'react'

export default function Counter(){
    //dispatch function will dispatch the actions
    const [count, dispatch] = useReducer((state, action) => {
        switch(action){
            case "+":
                return state + 1
            case "-":
                return state - 1
            default:
                return state
        }
    }, 0)
    return(
        <div>
            {count}
            <button onClick={() => dispatch('+')}>Increment</button>
            <button onClick={() => dispatch('-')}>Decrement</button>

        </div>
    )
}