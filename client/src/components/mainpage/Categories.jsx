import axios from 'axios';
import React from 'react';
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';



const Categories = () => {
    
const  [category , setCategory] = useState([]);



 useEffect(() => {
    axios.get('http://localhost:4000/category').then((response) => {
        setCategory(response.data);
    })
}, []);


    const serchByCategory = (CategoryID) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        /* useEffect(() => {
            axios.get('http://localhost:4000/category/serchByCategory',{CategoryID:CategoryID}).then((response) => {
                setCategory(response.data);
            })
        }, []); */
        localStorage.setItem('CategoryID',CategoryID);
    }
       
  return (
    <>
        <div className='category'>
        {category.map((value,index) =>{
                return(
                    <div className='box f_flex' key={index}>                        
                        <Link to = '/categoryitems'><span onClick={()=>{serchByCategory(value.CategoryID)}}>{value.CategoryName}</span></Link>
                    </div>
                )
            })}
        </div>
    </>
  );
}

export default Categories;
