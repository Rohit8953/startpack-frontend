import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data2 } from '../Data/M_data';
import '../index'

const Homeslider = () => {
    var settings = {
        dots:true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
      };

  return (
    <div className='h-[70vh] flex justify-center'>
        <div className='w-[100%]'>
         <Slider {...settings}>  
          {
            data2.map((img)=>{
                return(
                      <div >
                          <div style={{background:img.bg}} className='h-[30rem] flex flex-row items-center justify-around' >
                           <div className=' flex flex-col gap-10 w-[40rem] pl-10'>
                              <p className='text-4xl '>{img.head}</p>
                              <p>{img.paira}</p>
                              <button className='bg-white w-fit p-2 border-2 rounded-3xl px-10 hover:bg-blue-400 hover:text-white transition-all duration-300'>{img.btn}</button>
                           </div>
                           <div className='h-[20rem]'>
                              <img src={img.image} alt="" />
                           </div>
                        </div>
                      </div>
                )
            })  
          }
         </Slider>
        </div>
   
    </div>
  )
}
export default Homeslider