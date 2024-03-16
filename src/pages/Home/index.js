import React from 'react'
import NavbarApp from '../../components/NavbarApp'
import Jumbotron from '../../components/Jumbotron'
import About from '../../components/About'

function Home() {
  return (
    <div className='bg-lightMode dark:bg-darkMode'>
        <NavbarApp/>
        <Jumbotron />
        <div className='p-10'>
            <About />
        </div>
    </div>
  )
}

export default Home