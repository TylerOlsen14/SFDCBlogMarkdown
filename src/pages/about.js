import React from 'react'
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from '../components/layout'

import './pages.css'
import Profile from '../assets/GetImage.jpeg'

const About = () => {
  return (
      <Layout>
            <h1>Meet our writers</h1>
            <h2>My name is Tyler Olsen</h2>
            <div className="page-content">
              <img src={Profile} alt="TYLER" 
                style={{
                  margin: '13px',
                  float: 'left'
                }}
              />
              <Markdown source={aboutText[0].content} escapeHtml={false} />
            </div>
      </Layout>
  )
}

export default About