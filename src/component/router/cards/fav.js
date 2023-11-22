import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Favlist=()=>{
    const{state,dispatch}=useContext(Context)
    const[result,setResult]=useState([])
    useEffect(()=>{
       let k= state.o.filter((e,i)=>{
            return e.boolean==true
        })
        setResult(k)
    },[state])
    
     const fav=(e)=>{
        let a=state.o.map((b,i)=>{
            return b.id==e.id?{...e,boolean:!b.boolean}:b
        })
        dispatch({type:"card",payload:a})
    
    }
    
    return(
        <div>
        <section className="sec">
        <div className="container">
           <h1>Favorite Items</h1>
            {/* <h2>{state.name}</h2> */}
            {/* <button onClick={handle}>Click</button> */}
            <div className="row">
                {result.map((e,i)=>{
                    return(
                        <div key={i} className="col">
                            <div className="card">
                                <img src={e.img} alt=""/>
                                <h3>Fruitname: {e.name}</h3>
                                <p>Price: &#8377; {e.price}</p>
                                <div className="icons">
                                {e.boolean?<div onClick={()=>fav(e)} className="like" style={{color:"red"}}><BsFillBookmarkHeartFill/></div>:<div onClick={()=>fav(e)} className="like"><BsBookmarkHeart /></div>}
                                     <button className="btn">Add to cart</button>
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

export default Favlist