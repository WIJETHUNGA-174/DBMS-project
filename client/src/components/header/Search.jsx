import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
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
              <i className='fa fa-user icon-circle'></i>
              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                  <span>0</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Search
