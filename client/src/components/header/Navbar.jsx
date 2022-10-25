import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { TableCellsIcon } from '@heroicons/react/24/solid'



const Navbar = () => {
  const [MobileMenu,setMobileMenu] = useState(false)
  return (
    <>
        <header className="header">
          <div className='container d_flex'>
            <div className='categories d_flex'>
              <TableCellsIcon className='cat' />              
              <h4>
                Categories <i className='fa fa-chevron-down'></i>
              </h4>
            </div>
            <div className='navlink'>
              <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize" }  onClick = {() => setMobileMenu(false)}>
                <li>
                  <Link to ='/'>home</Link>
                </li>
                <li>
                  <Link to ='/cart'>cart</Link>
                </li>
                <li>
                  <Link to ='/user'>user account</Link>
                </li>
                <li>
                  <Link to ='/vendor'>vendor account</Link>
                </li>
                <li>
                  <Link to ='/track'>track my order</Link>
                </li>
                <li>
                  <Link to ='/contact'>contact</Link>
                </li>               
                
              </ul>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar