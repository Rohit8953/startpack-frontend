import React, { useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Appcontext } from '../Appcontest';
import Cardrouter from './Cardrouter';
import {useNavigate} from 'react-router-dom';
const Medicalstore = () =>{

    const navigate=useNavigate();

    const gotocart=()=>{
          navigate('');
    }


    const{
        cartarray, 
        setcartarray,
        addtocart,
        
     }=useContext(Appcontext)

  return (
    <div>
            <div className='flex flex-row justify-around h-[5rem] items-center ' >
                <div><img src="" alt="" /> LOGO </div>
                
                <div className='flex flex-row gap-5'>
                    <div className='bg-slate-200 h-fit p-2 rounded-lg flex flex-row gap-1 items-center'>
                        <FiSearch />
                        <input onChange={(event)=>changehandler(event.target.value)} className='bg-slate-200 outline-none' type="text" placeholder='Search Tests' />     
                    </div>
                    <p className='text-2xl font-bold'>Medicine Store</p>
                </div>

                <div className='flex flex-row gap-5'>
                    <div>
                        <FaRegHeart className='text-4xl'/> 
                    </div>
                    <div onClick={gotocart} className='relative '>
                         <div className=' absolute right-3 -top-2 w-4 h-4 rounded-full bg-green-600 animate-bounce flex justify-center items-center'>
                            {cartarray.length}
                         </div>
                        <BsCart4 className='text-4xl' /> 
                    </div>
                </div>
            </div>
       

            <div>
                <Cardrouter/> 
            </div>
    </div>
  )
}

export default Medicalstore