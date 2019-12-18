import React from 'react'

import Layout from '../components/layout'

import './pages.css'
import Headshot from '../assets/GetImage.jpeg'

const About = () => {
  return (
    <div>
      <Layout>
        <img src={Headshot} alt="TYLER"/>
        <h1>This is the ABOUT page</h1>
      </Layout>
    </div>
  )
}

export default About