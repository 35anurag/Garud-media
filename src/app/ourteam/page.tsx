import React from 'react'
import Team from './Team'
import Navbar from '../components/Navbar'
import TeamDetail from './TeamDetail'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Team />
      <TeamDetail />
      <Footer />
    </div>
  )
}

export default page