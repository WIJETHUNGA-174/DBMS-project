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
                        <span>{value.pname}</span>
                        <span>{value.unitprice}</span>
                        <span>{value.availibleQty}</span>
                        <span>{value.pid}</span>
                        
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Card
