import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const cart = () => {
    
// eslint-disable-next-line react-hooks/rules-of-hooks
const [cartItem, setCartItem] = useState([]);
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    const email = localStorage.getItem('email');
    axios.post('http://localhost:4000/cart',{email:email}).then((response) => {
        setCartItem(response.data);
    })
}, [cartItem]);

  return (
    <div>
        <div className='sellcard'>
            <div className='card d_flex' > 
                <div><span className='pname'>Product Name</span></div> 
                <div><span classname='brand'>Brand</span></div>
                <div><span className='unitprice'>Quantity</span></div> 
                <div ><input className='Qinput' type="text"placeholder="123...." /></div> 
                <div><button className='button'><span>Update</span></button></div> 
                <div><button className='button'><span>Remove</span></button></div> 
            </div>
            {cartItem.map((value,index) =>{
                return(
                    <div className='card d_flex' key={index}>
                        <div><span className='pname'>{value.ProductName}</span> </div> 
                        <div><span classname='brand'>{value.BrandName}</span></div>                         
                        <div><span className='unitprice'>{value.QTY}</span></div> 
                        <div ><input className='Qinput' type="text"placeholder="...QTY..." /></div> 
                        <div><button className='button'><span>Update</span></button></div> 
                        <div><button className='button'><span>Remove</span></button></div>  
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default cart
