import React from 'react'
import Navbar from '../components/Navbar'
import Toppage from './Toppage'
import Providing from './Providing'
import Ourpresence from '../components/Ourpresence'
import Strength from './Strength'
import Clients from './Products'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className=''>
        <Navbar />
        <Toppage />
        <Providing />
        <Ourpresence />
        <Strength />
        <Clients />
        <Footer />
    </div>
  )
}

export default page