import React from 'react'
import delivery5 from '../Data/delivery5.png'
import Medicalstore3 from '../Data/Medicalstore3.mp4'
 import {useNavigate} from 'react-router-dom' 
const MedicineEcomm = () => {
       
    const navigate=useNavigate();
    const clickHandler=()=>{
        
         navigate('/store');
     }



  return (
    <div className='w-[90vw] flex flex-col my-[3%] mx-auto'>
        <div>
            <p className='text-3xl font-bold'>
               Medicine store and fast delivery services 
            </p>
        </div>
       
        <div className='flex flex-row items-start gap-10 justify-around my-[2%]'>
            <div className='w-[45%] '>
                 <video className='rounded-md' src={Medicalstore3} autoPlay="false"/>
                <p className='my-2'>Quality You Can Trust: Genuine Medicines for Your Health Needs! From our pharmacy to your doorstep, we deliver authenticity and care with every prescription. Order now for peace of mind</p>
                <button onClick={clickHandler} className='bg-[#f2b1be] p-2 border-2 rounded-3xl px-10 my-[5%]  hover:bg-blue-400 hover:text-white transition-all duration-300'>Medical Store</button>
            </div>
            <div className='w-[40%]'>
                <img src={delivery5} alt="" />
            </div>
        </div>
    </div>
  )
}
export default MedicineEcomm
