import React from 'react'
import { data01 } from '../Data/M_data'
import {useNavigate} from'react-router-dom'
const Surgery = () => {
  const navigate=useNavigate();
  const clickHandler3=()=>{
       navigate('/surgery');
   }
  return (
    <div>
        <div onClick={clickHandler3} className='text-4xl mt-10 cursor-pointer hover:underline transition-all duration-200 font-bold'>
                Lab Tests and Report
        </div>
        <div className=' flex flex-wrap flex-row justify-center gap-5 my-[5%]'>
          {
              data01.map((img)=>{
                  return(
                        <div onClick={clickHandler3} className='w-[20rem] border-1 cursor-pointer flex flex-row rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                                  
                                <img className='w-[10rem]' src={img.images} alt="" />
                                <div className='p-2'>
                                  <h1 className='text-2xl'>{img.name}</h1>
                                  <p>{img.description}</p>
                                </div>

                        </div>
                  )
              })  
            }
      </div>
    </div>
  )
}

export default Surgery