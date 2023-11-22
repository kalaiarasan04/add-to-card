
import Data from "../../../obj.json"

export const initialState={
     o:Data.shop
}

export const Reduces=(state,action)=>{
    //  if(action.type==="a"){
        // return({...state,name:action.payload})
    //  }   

     if(action.type==="card"){
        return({...state,o:action.payload})
     }  
     
}

