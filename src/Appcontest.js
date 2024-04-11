import React, { useState } from 'react'
import { createContext } from 'react'
import { Medicinedata } from './Data/M_data';

export const Appcontext=createContext();
export default function AppcontextProvider({children}){

    const[cartarray, setcartarray]=useState([]);
     

    const addtocart=(index)=>{
        console.log(index);
        setcartarray((prev)=>[...new Set([...prev, Medicinedata[index]])])
        // console.log(cartarray);
        
    }

    const removefromcart=(indx)=>{
        console.log(indx);         
        setcartarray((prev)=>prev.filter((item,index) => index!== indx));  
        console.log(cartarray);   
    }





     const value={
        cartarray, 
        setcartarray,
        addtocart,
        removefromcart
     }


  return (
    <Appcontext.Provider value={value}>
         {children}
   </Appcontext.Provider>
  )
}

