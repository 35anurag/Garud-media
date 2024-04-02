import React from 'react'
import Navbar from '../components/Navbar'
import Toppage from './Toppage'
import Services from './Services'
import Principle from './Principle'
import Footer from '../components/Footer'
import Workingprocess from './Workingprocess'


const page = () => {
  return (
    <div className=''>
        <Navbar />
        <Toppage />
        <Services />
        <Principle />
        <Workingprocess />
        <Footer />
    </div>
  )
}

export default page