import React, { useContext, useState } from 'react'
import { Medicinedata } from '../Data/M_data'
import { Appcontext } from '../Appcontest';

const Card = () => {
    
    let arr=[];
     const[array, setarray]=useState(Medicinedata);

    Medicinedata.forEach((obj)=>{
            arr.push(obj.company);       
    })
    arr=[...new Set(arr)]; 


const ClickHandler=(data)=>{
      console.log(data);
      setarray(Medicinedata.filter((items)=>items.company===data)) ; 
      console.log(array);
 }

 const{
    cartarray, 
    setcartarray,
    addtocart
 }=useContext(Appcontext)
 
console.log(cartarray);

  return (
    <div className=' '>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-row flex-wrap gap-5 '>
          {
            arr.map((data)=>{
                return(
                    <div>
                        <button onClick={(event)=>ClickHandler(data)} className='border-2 px-5 rounded-lg'>{data}</button>
                    </div>
                )
            })
          }
        </div>
      </div>
      
    <div className='flex flex-row flex-wrap gap-10 w-[90%] mt-[2%] justify-center'>
        {
            
             array.map((data)=>{
                return(

                    <div key={data.id} className='p-5 bg-white w-fit flex flex-col justify-between border-2 shadow-inner shadow-slate-600 hover:shadow-[rgba(0,_0,_0,_0.3)_0px_60px_40px_-7px] hover:scale-110 transition delay-200  rounded-md'>
                        <div className='relative h-[70%]'>
                           <div></div>
                           <img className='w-[12rem]' src={data.imgs} alt="" />
                        </div>
                        <div >
                            <p>{data.name}</p>
                             <div>
                                <p>{data.rating}</p>
                             </div>
                            <div className='flex flex-row gap-5'>
                                <p>{data.newPrice}</p>
                                <p>{data.oldPrice}</p>
                            </div>
                            <p>{data.company}</p>
                        </div>
                        <div>
                          
                           <button onClick={()=>addtocart(data.id)} className='border-2 mt-2 rounded-lg p-2 px-8'>
                                Add-to-Cart
                           </button> 
                        </div>
                    </div>
                )
             })
        }
    </div>
   </div>
  )
}

export default Card