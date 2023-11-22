import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Addlist=()=>{
    const{state,dispatch}=useContext(Context)
    const[result,setResult]=useState([])

    useEffect(()=>{
       let k= state.o.filter((e,i)=>{
            return e.isadd==true
        })
        setResult(k)
    },[result])


    const add=(e)=>{
         let a=state.o.map((b,i)=>{
             return b.id==e.id?{...e,isadd:!b.isadd}:b
         })
         dispatch({type:"card",payload:a})

    }

    const mines=(e)=>{
            
        if(e.count>1){

        let m=state.o.map((s)=>{
            return e.id==s.id?{...e,count:e.count-1}:s
        })
        dispatch({type:"card",payload:m})
       
    }

    else{
        let m=state.o.map((d)=>{
            return e.id==d.id?{...e,isadd:!e.isadd}:d
        })
        dispatch({type:"card",payload:m})
    }

    }

    const plus=(e)=>{
       
        let m=state.o.map((d)=>{
            return d.id==e.id?{...e,count:d.count+1}:d
        })
        dispatch({type:"card",payload:m})
    }

    return(
        <div>
        <section className="sec">
        <div className="container">
           
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
                                     {e.boolean?<div className="like" style={{color:"red"}}><BsFillBookmarkHeartFill/></div>:<div className="like"><BsBookmarkHeart /></div>}
                                    {e.isadd?<div className="btns">
                                        <div onClick={()=>mines(e)}><BsDashLg /></div><span>{e.count}</span><div onClick={()=>plus(e)}><AiOutlinePlus /></div>
                                     </div> :<button onClick={()=>add(e)} className="btn">Add to cart</button>
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

export default Addlist