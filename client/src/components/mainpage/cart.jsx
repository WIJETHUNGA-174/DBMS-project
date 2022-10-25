import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cart = () => {
    
// eslint-disable-next-line react-hooks/rules-of-hooks
const [cartItem, setCartItem] = useState([]);
// eslint-disable-next-line react-hooks/rules-of-hooks
const [updatedQty, setUpdatedQty] = useState([0]);
// eslint-disable-next-line react-hooks/rules-of-hooks
const [total, setTotal] = useState([0]);
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    const email = localStorage.getItem('email');
    axios.post('http://localhost:4000/cart/show',{email:email}).then((response) => {
        setCartItem(response.data);
    })
    axios.post('http://localhost:4000/cart/total',{email:email}).then((response) => {
            setTotal(response.data.total);
        })
}, [cartItem]);

const updateCart = (ProductID) => {
    const email = localStorage.getItem('email');
    axios.post('http://localhost:4000/cart/update',{email:email,ProductID:ProductID,updatedQty:updatedQty}).then((response) => { 
        window.location.reload();       
    })
}

const deleteCart = (ProductID) => {
    const email = localStorage.getItem('email');
    axios.post('http://localhost:4000/cart/deleteone',{email:email,ProductID:ProductID}).then((response) => {
        window.location.reload();
    })
}

const deleteAllCart = () => {
    const email = localStorage.getItem('email');
    axios.post('http://localhost:4000/cart/deleteall',{email:email}).then((response) => {
        window.location.reload();
    })
}




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
                        <div ><input className='Qinput' type="text"placeholder="...QTY..."
                        onChange={(event)=>{
                            setUpdatedQty(event.target.value);
                          }} /></div> 
                        <div><button className='button' onClick={()=>{updateCart(value.ProductID)}}><span>Update</span></button></div> 
                        <div><button className='button'onClick={()=>{deleteCart(value.ProductID)}}><span>Remove</span></button></div>  
                    </div>
                )
                
                
            })}
            <div>
                <div className='d_flex'><div>Total :</div>{total} </div>
                <div><button className='button'><span><Link to='/confirmOrder'>PLACE ORDER</Link></span></button></div> 
                <div><button className='button'onClick={()=>{deleteAllCart()}}><span>CLEAR CART</span></button></div>
            </div>

        </div>
        
    </div>
  )
}

export default cart
