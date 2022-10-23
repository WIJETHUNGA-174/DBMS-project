import React from 'react'

const Card = () => {
        const card = [
            { 
                pname: 'QT bar 10mm',
                unitprice:"1550",
                availibleQty:"58",
                pid:"1" 

            },
            { 
                pname: "BOX Bar 1 1/4",
                unitprice:"4641",
                availibleQty:"2464",
                pid:"1" 

            },
            { 
                pname: 'BOX Bar 2',
                unitprice:"8500",
                availibleQty:"4648",
                pid:"1" 

            }
            ,
            { 
                pname: 'QT bar 32mm',
                unitprice:"64648",
                availibleQty:"6464",
                pid:"1" 

                
            }
            ,
            { 
                pname: 'QT bar 12mm',
                unitprice:"5464",
                availibleQty:"556",
                pid:"1" 

            }
        ]
  return (
    <>
        <div className='sellcard'>
        <div className='card d_flex' > 
                        <div>
                            <span className='pname'>Product Name</span>
                        </div> 
                        <div><span className='unitprice'>Unit Price</span></div> 
                        <div><span className='qty'>Availyble Qty</span></div>  
                        <div ><input className='Qinput' type="text"placeholder="123...." /></div> 
                        <div>
                            <button className='button'><span>ADD CART</span></button>
                        </div>  
                    </div>
            {card.map((value,index) =>{
                return(
                    <div className='card d_flex' key={index}> 
                        <div>
                            <span className='pname'>{value.pname}</span>
                        </div> 
                        <div><span className='unitprice'>{value.unitprice}</span></div> 
                        <div><span className='qty'>{value.availibleQty}</span></div>  
                        <div ><input className='Qinput' type="text"placeholder="...QTY..." /></div> 
                        <div>
                            <button className='button'><span>ADD CART</span></button>
                        </div>  
                    </div>
                )
            })}
        </div>
      
    </>
  )
}

export default Card
