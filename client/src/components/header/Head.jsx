import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.reload();
    }
  return (
    <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>+94 777444875</label>
                    <i className='fa fa-envelope'></i>
                    <label htmlFor=''>lahirurandima@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ'S</label>
                    <label>Need Help</label>
                    <span>Sri Lanka</span>
                    <i className='fa fa-angle-down'></i>
                    <Link to='/admin'>
                        <i className='fa fa-user' onClick={logout}></i>
                    </Link>                    
                </div>
            </div>
        </section>
            

    </>
  )
}

export default Head
