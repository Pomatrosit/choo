import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return(
    <div style = {{margin:"2.6rem 0", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <img src={logo} alt="logo" />
      <p style = {{
         color:"#ddd",
         fontSize:"1.3rem"
      }}>
       Служба доставки работает</p>
    </div>
  )
}

export default Header
