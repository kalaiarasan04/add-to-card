import React, { useContext, useEffect, useState } from "react";
import logo from '../../../images/download (1).png'
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { BsSearch} from "react-icons/bs";
import "./header.css"
import { useNavigate} from "react-router-dom";
import { Context } from "../cards/context";


const Routhome=(p)=>{
    const{state,dispatch}=useContext(Context)
    const[change,setchange]=useState("")
    const[fruit,setFruit]=useState([])
    const[boolean,setBoolean]=useState(false)

    useEffect(()=>{
        if(change!==""){
            const x=state.o.filter((e)=>{

                return e.name.toLowerCase().includes(change.toLowerCase())
            
            })
            
            dispatch({type:"card",payload:x})
            
            if(x.length>0){
                setFruit(x)
                setBoolean(false)
            }
            else{
                setFruit([])
                setBoolean(true)
            }
        }
       else{
        setFruit([])
        setBoolean(false)
        
       }
    },[change])
    

    let nav=useNavigate()
    
    const fav=()=>{
    let f=state.o.filter((e)=>{
        return e.boolean===true
    })
    if(f.length>0){
        nav('/Fav')
    }
    else{
        alert("Fav is empty")
    }
       
    }

    const add=()=>{
        let f=state.o.filter((e)=>{
            return e.isadd===true
        })
        if(f.length>0){
            nav('/Addlist')
        }
        else{
            alert("Empty card")
        }
    }

    return(
        <div>
        <header className="head-sec">
            <div className="container2">
                <div className="rows">
                    <div className="cols1">
                        
                         <img src={logo} alt="" />
                    </div>
                    <div className="cols2">
                        <div className="align">
                        <input className="box" type="text" placeholder="Search" value={change} onChange={(e)=>setchange(e.target.value)} />
      
                            {
                            fruit.length?<div className="search-card">{
                                fruit.map((e,i)=>{
                                    return(
                                    // <div>
                                        <div key={i} className="search-row">
                                                
                                            <div className="search-col">
                                            <img src={e.img} alt="" />
                                            </div>
                                            <div className="search-col">
                                                <h6>{e.name}</h6>
                                            </div>  
                                            <div className="search-col">
                                                <p>&#8377;{e.price}</p>
                                            </div>
                                            
                                        </div>
                                        // {/* </div>  */}
                                            
                                    )
                                })
                            }</div>:boolean?<div className="empty-box"><h4>No items</h4></div>:""
                            
                        }
    
                        <i className="search" onClick={()=>p.k(fruit)}><BsSearch /></i>
                        </div>
                        </div>
                        <div className="cols3">
                            <div className="i">
                                <i onClick={fav} style={{cursor:"pointer"}}><AiOutlineHeart /></i>
                                <i onClick={add} style={{cursor:"pointer", border:"1px solid #fff", padding:"6px 10px", fontSize:"16px"}}>Cart <AiOutlineShoppingCart/></i>
                            </div>
                        </div>
                   
                </div>
            </div>
        </header>
       
        <div>
           
        </div>
     
        </div>
        
    )
}

export default Routhome