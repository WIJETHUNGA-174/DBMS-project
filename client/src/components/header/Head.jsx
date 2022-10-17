import React from 'react'

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>+94 777444875</label>
                    <i className='fa fa-envelope'></i>
                    <label htmlFor=''>example@gmail.com</label>
                </div>
                <div className="right row RTex">
                    <label>Theme FAQ'S</label>
                    <label>Need Help</label>
                    <span>Sri Lanka</span>
                    <i className='fa fa-angle-down'></i>
                    <i className='fa fa-user'></i>
                </div>
            </div>
        </section>
            

    </>
  )
}

export default Head
