import React from 'react'
import { Testsdata } from '../Data/M_data'
import {useNavigate} from'react-router-dom'
const Labtest = () => {
    const navigate=useNavigate();
    const clickHandler2=()=>{
         navigate('/test');
     }
  return (
    <div>  
        <div className='w-[90vw] mx-auto'>
            <div onClick={clickHandler2} className='text-4xl cursor-pointer hover:underline transition-all duration-200 font-bold'>
                Lab Tests and Report
            </div>
            <div className='mt-10 flex flex-row flex-wrap gap-10 justify-center items-center'>
                {
                    Testsdata.map((img)=>{
                        return(
                            <div onClick={clickHandler2} className='flex flex-col items-center cursor-pointer '>     
                                    <img className='w-[10rem]' src={img.imgs} alt="" />
                                    <h1 className='text-xl mt-2'>{img.title}</h1>              
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    </div>
  )
}

export default Labtest