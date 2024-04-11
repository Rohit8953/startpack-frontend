import React from 'react'

import {useNavigate} from 'react-router-dom'
import doctor from '../Data/doctor.png'
import docter20 from '../Data/docter20.png'
import imager013 from '../Data/imager013.png'
import imager014 from '../Data/imager014.png'
import imager015 from '../Data/imager015.png'

const Doctorcard = () =>{
  const navigate=useNavigate();
  const clickHandler5=()=>{
       navigate('/test');
   }
  return (
    <div>
      <div onClick={clickHandler5} className='text-4xl mt-10 cursor-pointer hover:underline transition-all duration-200 font-bold'>
                Doctors,Medicine, Tests,Surgery
        </div>
      <div className=' flex flex-wrap flex-row justify-center gap-5 my-[5%]'>

                           <div className='w-[15rem] border-1 flex flex-col rounded-tl-3xl rounded-br-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                                  
                                  <img className='' src={doctor} alt="" />
                                  <div className='p-2'>
                                    <h1 className='text-xl'>Find Doctors Near You</h1>
                                    <p>Confirmed Appointment</p>
                                  </div>
  
                           </div>
                           <div className='w-[15rem] border-1 flex flex-col rounded-tl-3xl rounded-br-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                                  
                                  <img className='' src={docter20} alt="" />
                                  <div className='p-2'>
                                    <h1 className='text-xl'>Medicine</h1>
                                    <p>Essentials at your doorstep</p>
                                  </div>
  
                           </div>
                           <div className='w-[15rem] border-1 flex flex-col rounded-tl-3xl rounded-br-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                                  
                                  <img className='' src={imager013} alt="" />
                                  <div className='p-2'>
                                    <h1 className='text-xl'>Lab Tests</h1>
                                    <p>Sample pickup at your home</p>
                                  </div>
  
                           </div>
                           <div className='w-[15rem] border-1 flex flex-col rounded-tl-3xl rounded-br-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                                  
                                  <img className='' src={imager014} alt="" />
                                  <div className='p-2'>
                                    <h1 className='text-xl'>Surgery</h1>
                                    <p>Safe and trusted surgery centers</p>
                                  </div>
  
                           </div>
                           <div className='w-[15rem] border-1 flex flex-col rounded-tl-3xl rounded-br-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                                  
                                  <img className='' src={imager015} alt="" />
                                  <div className='p-2'>
                                    <h1 className='text-xl'>Patient</h1>
                                    <p>Patient Details</p>
                                  </div>
  
                           </div>
                          


      </div>
    </div>
  )
}

export default Doctorcard