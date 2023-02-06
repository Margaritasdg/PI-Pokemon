import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo_poke from "../img/logo_poke.png";


const NavBar = ()=> {
  return (
      <header id="navegador" className="header">
        <Link to="/">
          <img  className="logo" src={logo_poke} alt="404" />
        </Link>
        <div> <Link to="/create" className="created" >
              Crear Pokemon
            </Link></div>
  
      </header>

  );
}

export default NavBar;