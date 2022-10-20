import React from 'react'

const Card = () => {
        const card = [
            { 
                pname: 'Pname',
                unitprice:"unitprice",
                availibleQty:"availibleQty",
                pid:"1" 

            },
            { 
                pname: 'Pname',
                unitprice:"unitprice",
                availibleQty:"availibleQty",
                pid:"1" 

            },
            { 
                pname: 'Pname',
                unitprice:"unitprice",
                availibleQty:"availibleQty",
                pid:"1" 

            }
            ,
            { 
                pname: 'Pname',
                unitprice:"unitprice",
                availibleQty:"availibleQty",
                pid:"1" 

                
            }
            ,
            { 
                pname: 'Pname',
                unitprice:"unitprice",
                availibleQty:"availibleQty",
                pid:"1" 

            }
        ]
  return (
    <>
        <div className='sellcard'>
            {card.map((value,index) =>{
                return(
                    <div className='box f_flex' key={index}>                        
                        <span className='pname'>{value.pname}</span>
                        <span className='unitprice'>{value.unitprice}</span>
                        <span className='qty'>{value.availibleQty}</span>
                        <span className='pid'>{value.pid}</span>
                        <input type="text"placeholder="...QTY..." />
                        <i className="fa-solid fa-plus">Add cart</i>                      
                    </div>
                )
            })}
        </div>
      
    </>
  )
}

export default Card
