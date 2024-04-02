import React from 'react'
// import Team from './Team'
import Navbar from '../components/Navbar'
// import TeamDetail from './TeamDetail'
import Footer from '../components/Footer'
import Projects from './Projects'


const page = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  )
}

export default page