import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'

import "./components.css"

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )

}

export default Layout