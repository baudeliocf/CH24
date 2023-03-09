// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar.js';

// import Astronauts from './Components/Astronauts/Astronauts';
// import Main from './Components/Main/Main.js';
// import APOD from './Components/APOD/APOD';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import NavBarV2 from './Components/ButtonAppBar/ButtonAppBar.js';
import Card from './Components/Card/Card.js';

import Page1 from './Routes/Page1';
import Page2 from './Routes/Page2';
import Page3 from './Routes/Page3';

function App() {
  const data = {
    title: "Hola espacio",
    text: "Holiii"
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="App">
      {/* <NavBarV2 /> */}
      <NavBar />

      <Routes>
        <Route path='/' element={ <Page1 /> }/>
        <Route path='/astronauts' element={ <Page2 /> }/>
        <Route path='/apod' element={ <Page3 /> }/>

      </Routes>


      {/* <Card /> */}
      {/* <Main {...data} /> */}
      {/* <Main/> */}
      {/* <Astronauts/> */}
      {/* <APOD/>*/}
      {/* <Main title='Hola espacio' text='Holi'/> */}
      {/* <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Outlined</Button>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Checkbox {...label} defaultChecked /> */}
    </div>
  );
}

export default App;


