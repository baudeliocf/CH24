import React from "react";

// const divStyle = {
//     color: 'blue',
//     backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/2/29/Godzilla_%2754_design.jpg')",
// }


const AppBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/">
            <img
              className="nav-img"
			  alt="space"
              src="https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png"
            ></img>
          </a>
          <h1 style={{color: '#FFCC00'}} className="nav-title">Space-app</h1>
        </div>
        <div className="nav-links">
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

export default AppBar;

  /* <></> react fragment*/

