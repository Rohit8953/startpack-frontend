import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
const Routetest = () => {
  return (
    <div className='mt-10 w-[100%] h-[100vh]'>
        <div>
            {/* for slide */}
        </div>

        <div className='flex flex-row gap-5'>
            <div className='bg-slate-200 rounded-lg flex flex-row gap-1 items-center '>
                <IoLocationSharp />
                <input className='outline-none bg-slate-200' type="text" placeholder='Location' name=''  />
            </div>
            <div className='bg-slate-200 p-2 rounded-lg flex flex-row gap-1 items-center'>
                <FiSearch />
                <input className='bg-slate-200 outline-none' type="text" placeholder='Search Tests' name=''  /></div>
        </div> 

    </div>
  )
}

export default Routetest