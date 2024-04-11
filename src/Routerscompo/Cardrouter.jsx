import React from 'react'
import {Routes,Route} from'react-router-dom'
import Card from './Card'
import Addtocarts from './Addtocarts'

const Cardrouter = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Card/>} />
            <Route path='addedtocarts' element={<Addtocarts/>} />
            
        </Routes>
        <Addtocarts/>

    </div>
  )
}

export default Cardrouter