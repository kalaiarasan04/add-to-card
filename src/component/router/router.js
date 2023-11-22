import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Context } from './cards/context.js'
import { Reduces, initialState } from './cards/reduce'
import Cart from './cards/cart.js'
import Fav from './cards/fav.js'
import Addlist from './cards/addtocart.js'


const Router=()=>{
    const[state,dispatch]=useReducer(Reduces,initialState)
    return(
        <div>
            <Context.Provider value={{state,dispatch}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Cart />} />
                        <Route path="/Fav" element={<Fav />} />
                        <Route path="/Addlist" element={<Addlist />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    )
   
}

export default Router