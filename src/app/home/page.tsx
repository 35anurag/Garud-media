import React from 'react'
import Navbar from '../components/Navbar'
import Toppage from './Toppage'
import Services from './Services'
import Ourpresence from '../components/Ourpresence'
import Strength from './Strength'
import Footer from '../components/Footer'
import Workingprocess from './Workingprocess'

const page = () => {
  return (
    <div className=''>
        <Navbar />
        <Toppage />
        <Services />
        <Ourpresence />
        <Workingprocess />
        <Strength />
        <Footer />
    </div>
  )
}

export default page