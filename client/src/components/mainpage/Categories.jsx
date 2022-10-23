import axios from 'axios';
import React from 'react';
import { useEffect,useState } from "react";



const Categories = () => {
    
const  [category , setCategory] = useState([]);


 useEffect(() => {
    axios.get('http://localhost:4000/category').then((response) => {
        setCategory(response.data);
    })
}, []);
   



       
  return (
    <>
        <div className='category'>
        {category.map((value,index) =>{
                return(
                    <div className='box f_flex' key={index}>                        
                        <span>{value.CategoryName}</span>
                    </div>
                )
            })}
        </div>
    </>
  );
}

export default Categories;
