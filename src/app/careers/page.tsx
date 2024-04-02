import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Vacancy from './Vacancy'

const page = () => {
  return (
    <div>
      <Navbar />
      <Vacancy />
      <Footer />
    </div>
  )
}

export default page