import React from "react"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <hr/>
        <h5>&copy; Tyler Olsen, {new Date().getFullYear()} Footer!!!</h5>
      </div>
    </div>
  )
}

export default Footer