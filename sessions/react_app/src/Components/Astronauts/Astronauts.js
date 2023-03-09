import "./Astronauts.css";
import data from '../../Constants/astronauts';

const Astronauts = () => {

  const astronaut = data.map(item => <Astronaut {...item}/>);

  return (
    <div className="astronauts-container">
      <h1 className="astronauts-title">Personas en el espacio</h1>
      {astronaut}

      {/* <div className="astronaut-container">
        <h1 className="astronaut-name"></h1>
        <h1 className="astronaut-craft">Estación: </h1>
      </div> */}
    </div>
  )
}

const Astronaut = props => {
  return (
    <div className="astronaut-container">
      <h1 className="astronaut-name">{props.name}</h1>
      <h1 className="astronaut-craft">Estación: {props.craft}</h1>
    </div>
  )
}

export default Astronauts;
