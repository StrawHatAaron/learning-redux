import React from 'react'
import Counter from './reactUse/Counter'
import ShoppingList from './reactUse/ShoppingList';


export default function ReactUseReducer(){
    //dispatch function will dispatch the actions

    return(
        <>
            <Counter/>
            <hr/>
            <ShoppingList/>
        </>
    )
}