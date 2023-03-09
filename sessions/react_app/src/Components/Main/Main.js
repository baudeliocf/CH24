import './Main.css'

const Main = (props) => {
    const title = props.title;
    const text = props.text;

    console.log(props);
    return (
        <div className='main-container'>
            <hi>{props.title}</hi>
            <p>{props.text}</p>
        </div>
    )

}

Main.defaultProps = {
    title: "1",
    text: "2",
}


export default Main;