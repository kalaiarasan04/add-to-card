import React, { useContext, useEffect, useState} from "react";
import { Context } from "./context.js";
import { BsBookmarkHeart } from "react-icons/bs";
import "./cart.css"
import Header from '../header/header.js'
import Responsive from "../carousel/carousel.js";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineShoppingCart} from "react-icons/ai";


const Cart=()=>{
    const {state,dispatch}=useContext(Context)
    const[fill,setFil]=useState([])


    // const handle=()=>{
    //     dispatch({type:"a",payload:"kd"})
    // }
    
    useEffect(()=>{
        setFil(state.o)
    },[])

    const fav=(e)=>{
        let a=state.o.map((b,i)=>{
            return b.id==e.id?{...e,boolean:!b.boolean}:b
        })
        dispatch({type:"card",payload:a})
        setFil(a)
    
    }

// Add to cart

    const add=(e)=>{
         let a=state.o.map((b,i)=>{
             return b.id==e.id?{...e,isadd:!b.isadd}:b
         })
         dispatch({type:"card",payload:a})
         setFil(a)

    }

    const mines=(e)=>{
            
        if(e.count>1){

        let m=state.o.map((s)=>{
            return e.id==s.id?{...e,count:e.count-1}:s
        })
        dispatch({type:"card",payload:m})
        setFil(m)
    }

    else{
        let m=state.o.map((d)=>{
            return e.id==d.id?{...e,isadd:!e.isadd}:d
        })
        dispatch({type:"card",payload:m})
        setFil(m)
    }

    }

    const plus=(e)=>{
       
        let m=state.o.map((d)=>{
            return d.id==e.id?{...e,count:d.count+1}:d
        })
        dispatch({type:"card",payload:m})
        setFil(m)
    }

    const nav=(f)=>{
        setFil(f)
    }

    return(
        <div>
            <Header k={nav} />     
        <section className="sec">
            <Responsive />
        <div className="container">
           
            {/* <h2>{state.name}</h2> */}
            {/* <button onClick={handle}>Click</button> */}
            <div className="row">
                {fill.map((e,i)=>{
                    return(
                        <div key={i} className="col">
                            <div className="card">
                                <img src={e.img} alt=""/>
                                <h3>Fruitname: {e.name}</h3>
                                <p>Price: &#8377; {e.price}</p>
                                <div className="icons">
                                     {e.boolean?<div onClick={()=>fav(e)} className="like" style={{color:"red"}}><BsFillBookmarkHeartFill/></div>:<div onClick={()=>fav(e)} className="like"><BsBookmarkHeart /></div>}
                                    {e.isadd?<div className="btns">
                                        <div onClick={()=>mines(e)}><BsDashLg /></div><span>{e.count}</span><div onClick={()=>plus(e)}><AiOutlinePlus /></div>
                                     </div> :<button onClick={()=>add(e)} className="btn">Add to cart <AiOutlineShoppingCart /></button>
                                     }
                                </div> 
                            </div>
                        </div>    
                    )
                })

                }
            </div>
        </div>
        </section>
        </div>
    )
}

export default Cart