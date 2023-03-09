import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// const divStyle = {
//     color: 'blue',
//     backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/2/29/Godzilla_%2754_design.jpg')",
// }

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          {/* <a href="/"> */}
          <Link to='/'>
            <img
              className="nav-img"
              alt="space"
              src="https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png"
            ></img>
            </Link>
          {/* </a> */}
          <h1 className="nav-title">Space-app</h1>
        </div>
        <div className="nav-links">
          <Link to='astronauts' > Personas en el espacio</Link>
          <Link to='apod' > 222</Link>

          <a href="/">Space</a>
          <a href="/">Photo</a>
        </div>
      </div>
    </nav>
    // <>
    // <h1>Test</h1>
    // <h1>Test</h1>
    // </>
  );
};

export default NavBar;

/* 
  <></> react fragment
  <h1 style={{color: '#FFCC00'}} className="nav-title">Space-app</h1>
*/
