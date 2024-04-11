import React, { useContext } from 'react'
import { Appcontext } from '../Appcontest'

const Addtocarts = () => {

    const{
        cartarray,
        removefromcart, 
        setcartarray,
        addtocart
     }=useContext(Appcontext)



  return (
    <div>
        <div className='h-44 bg-slate-300 flex flex-row justify-around items-center'>
             <div>
                <p>Total Items: {cartarray.length}</p>
                <span>
                    Total Price {(() => {
                        let sum1 = 0;
                        cartarray.forEach(({ newPrice }) => {
                        sum1 += parseFloat(newPrice);
                        });
                        return sum1.toFixed(2); // Round to 2 decimal places for currency, adjust as needed
                    })()}
                </span>
             </div>
             <div>
                <p>Your Cart</p>
             </div>
             <div>
             <button className='bg-white w-fit p-2 border-2 rounded-3xl px-10 hover:bg-blue-400 hover:text-white transition-all duration-300'>Place Order</button>
             </div>
        </div>
        <div>
        <div className='flex flex-row flex-wrap gap-10 w-[90%] mt-[2%] justify-center'>
        {
            
             cartarray.map((data,indx)=>{
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
                        <button className='border-2 p-1 rounded-md mx-auto '
                            onClick={()=>removefromcart(indx)}
                             >
                            Remove-from-Cart
                         </button> 
                        </div>
                    </div>
                )
             })
        }
       </div>   
        </div>
    </div>
  )
}

export default Addtocarts