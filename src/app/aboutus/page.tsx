import React from 'react'
import Navbar from '../components/Navbar'
import Toppage from './Toppage'
import Features from './Features'
import Ourpresence from '../components/Ourpresence'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Toppage />
      <Features />
      <Ourpresence />
      <Footer />
    </div>
  )
}

export default page