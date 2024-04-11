import React from 'react'
import Homeslider from '../Homecomponents/Homeslider'
import { testcarddata } from '../Data/M_data'
const Testcard =()=>{
  return (
    <div className='mx-auto mt-[2%]'>
        <div className=''>
            <Homeslider/>
        </div>
        <div className='w-[90%] flex flex-row' >
             <div className='flex flex-row flex-wrap gap-5 ' >
                 {
                   testcarddata.map((data)=>{
                      return(
                        <div className=' bg-slate-200 p-5 rounded-lg w-[8rem]'>
                            <img className='' src={data.imgs} alt="" />
                            <p>{data.name}</p>
                        </div>
                      )
                   })
                 } 
             </div>
             {/* surgery booking form */}
             <div className='flex flex-col gap-5'>
                <div className='flex flex-row bg-cyan-300 justify-between p-5 rounded-lg'>
                    <p>Fees</p>
                    <p>1000</p>
                </div>
                <form className='flex flex-col'>
                    <label className='mt-5' >Name</label>
                    <input type="text" placeholder='Enter your name' className=' outline-none border-2 p-2 mt-2  rounded-lg'  />
                    <label className='mt-5'>Location</label>
                    <input type="text" placeholder='Enter your location' className=' outline-none border-2 p-2 mt-2 rounded-lg'/>
                    <label className='mt-5'>Mobile Number</label>
                    <input type="phone"  placeholder='Enter your number' className=' outline-none border-2 p-2 mt-2 rounded-lg'/>
                    <label className='mt-5'>Email Address</label>
                    <input type="phone"  placeholder='Enter your Email' className=' outline-none border-2 p-2 mt-2 rounded-lg'/>
                    {/* drop down will be here */}
                    <div className='mt-5'>
                       <label  htmlFor="dropdown">Select an option:</label>
                            <select id="dropdown" className=' outline-none border-2 p-2 mt-2 rounded-lg' >
                                   <option value="">-- Please choose an option --</option>
                                
                                    {
                                        testcarddata.map((data)=>{
                                            return(
                                              <option value="option1">
                                                 {data.name}
                                              </option>
                                            )
                                        })
                                    }

                            </select>
 
                    </div>
                    <button className='mt-5 mx-auto bg-white w-fit p-2 border-2 rounded-3xl px-10 hover:bg-blue-400 hover:text-white transition-all duration-300'>
                        Submit
                    </button>
                </form>    
             </div>
        </div>
    </div>
  )
}

export default Testcard