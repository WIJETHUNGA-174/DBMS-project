import React from 'react'

const Card = () => {
        const card = [
            { 
                pname: 'Pname',
                unitprice:"unitprice",
                availibleQty:"availibleQty",
                pid:"1" 

            }
        ]
  return (
    <div>
        <div className='sellcard'>
            {card.map((value,index) =>{
                return(
                    <div className='box f_flex' key={index}>                        
                        <h1 className='pname'>{value.pname}</h1>
                        <span className='unitprice'>{value.unitprice}</span>
                        <span className='qty'>{value.availibleQty}</span>
                        <span className='pid'>{value.pid}</span>
                        
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Card
