import React from 'react'
import Card from './Card'
import Categories from './Categories'

const Home = () => {
  return (
    <>
        <section className='home'>
            <div className='container d_flex'>
                <Categories />
                <Card />
            </div> 
        </section>

    </>
  )
}

export default Home
