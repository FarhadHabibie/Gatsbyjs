
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar/Navbar"

const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: `RoyalBlue`,
      marginBottom: `1.45rem`,
      
    }}    
  >
    <Navbar/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
