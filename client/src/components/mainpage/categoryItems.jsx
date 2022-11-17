/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import Categories from './Categories'





const categoryitems = () => {
    //fetching the category items from the database
    const [categoryItems, setCategoryItems] = useState([]);
    useEffect(() => {
        const CategoryID = localStorage.getItem('CategoryID');        
            axios.post('http://localhost:4000/category/serchByCategory',{CategoryID:CategoryID}).then((response) => {
                setCategoryItems(response.data);
            })
    }, [categoryItems]);
       

            


    //adding the items to the cart
    const [QTY, setQty] = useState([0]);

    const addCart = (ProductID) => {
        
        const email = localStorage.getItem('email');
        axios.put('http://localhost:4000/addcart',{email:email,ProductID:ProductID,QTY:QTY}).then((response) => {
            console.log(response.data);
            window.location.reload();
        })
    }
    const reload = () => {
        window.location.reload();
    }






    return (
        <div className='container d_flex'>
            <span ><Categories /></span>
            
        <>
            <div className='sellcard'>
                <div className='card d_flex' > 
                    <div><span className='pname'>Product Name</span></div> 
                    <div><span classname='brand'>Brand</span></div>
                    <div><span className='unitprice'>Unit Price</span></div> 
                    <div><span className='qty'>Availyble Qty</span></div>  
                    <div ><input className='Qinput' type="text"placeholder="123...." /></div> 
                    <div><button className='button'><span>ADD CART</span></button></div>  
                </div>
                {categoryItems.map((value,index) =>{
                    return(
                        <div className='card d_flex' key={index}>
                            <div><span className='pname'>{value.ProductName}</span> </div> 
                            <div><span classname='brand'>{value.BrandName}</span></div>                         
                            <div><span className='unitprice'>{value.UnitPrice}</span></div> 
                            <div><span className='qty'>{value.StockQty}</span></div> 
                            <div ><input className='Qinput' type="text" placeholder="...QTY..."
                            onChange={(event)=>{
                                setQty(event.target.value);
                              }}
                             /></div> 
                            <div><button className='button'onClick={()=>{addCart(value.ProductID)}}><span>ADD CART</span></button></div>  
                        </div>
                    )
                })}
            </div>      
        </>
        </div>
      )
}

export default categoryitems
