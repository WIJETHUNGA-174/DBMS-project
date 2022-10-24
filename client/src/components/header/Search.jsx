import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from 'axios';

const Search = () => {
  window.addEventListener("scroll", function ()  {
    const search = document.querySelector(".search")
    search.classList.toggle('active', window.scrollY > 100)
  })
  const [numberOfCartItems, setNumberOfCartItems] = useState('');
  

  useEffect(() => {
    const email = "jhon@gmail.com"
    axios.post('http://localhost:4000/cart/items',{email:email}
    ).then((response) => {
      setNumberOfCartItems(response.data[0].len);
      console.log(response.data[0].NumberOfItems);
    })
}, []);
  return (
    <>
  
        <section className='search'>
          <div className='container f_flex'>
            <div className='logo width'>
              <i className='logo_txt'><span className='j'>J</span> ANAHITHA</i>
            </div>
            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type="text"placeholder="Search and hit enter...." />
              <span>All Category</span>
            </div>
            <div className='icon f_flex width'>
              <Link to= '/profile'>
              <i className='fa fa-user icon-circle'></i>
              </Link>              
              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                </Link>
                  <span>
                  {numberOfCartItems}                   
                  </span>                
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
 

export default Search
