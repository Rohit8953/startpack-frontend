import React from 'react';
import Doctorcard from '../Homecomponents/Doctorcard';
import Bookingslot from '../Homecomponents/Bookingslot';
import Homeslider from '../Homecomponents/Homeslider';
import MedicineEcomm from '../Homecomponents/MedicineEcomm';
import Labtest from '../Homecomponents/Labtest';
import Userfeedback from '../Homecomponents/Userfeedback';
import Footer from '../Homecomponents/Footer';
import Surgery from '../Homecomponents/Surgery';


const Home = () => {

  return (
    <div className='flex flex-col mx-auto'>
    
        <div >
            <Homeslider/>
        </div>

        <div id='doctor'>
            <Doctorcard/>
        </div>
        <div id='doctor'>
            <Bookingslot/>   
        </div >
        <div id='medicine'>
            <MedicineEcomm/>   
        </div>

        <div id='tests'>
            <Labtest/>   
        </div>
        <div id='surgery'>
            <Surgery/>   
        </div>
        <div id='feedback'>
            <Userfeedback/>   
        </div>
        <div>
            <Footer/>   
        </div>
    </div>
  )
}

export default Home