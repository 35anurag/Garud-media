import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from './Team'

const page = () => {
  return (
    <div>
      <Navbar />
      <Team />
      <Footer />
    </div>
  )
}

export default page