import React from 'react'
import { Link } from 'react-router-dom'

const Serch = () => {
  return (
    <>
        <section className='search'>
          <div className='container c_flex'>
            <div className='logo width'>
              <h1 className='logo_txt'><span className='j'>J</span> ANAHITHA</h1>
            </div>
            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type="text"placeholder="Search and hit enter...." />
              <span>All Category</span>
            </div>
            <div className='icon f_flex width'>
              <i className='fa fa-user icon_circle'></i>
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

export default Serch
