import { useState } from 'react';
import { useEffect } from 'react';
import './APOD.css'

// const dataURL = 'https://fakestoreapi.com/products'
const dataURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

const APOD = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const controller = new AbortController();

        const getData = async () => {
            fetch(dataURL)
                .then(res => res.json())
                .then(data => setData(data))
                .then(err => console.error(err));
        }

        getData();

        return () => controller.abort();


    }, [])

    // const fetchData = () => {
    //     fetch(dataURL)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    //     .then(err => console.error(err));
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);




    return (
        <div className='apod-container'>
            <h1 className='apod-title'>{data.title}</h1>
            <img alt='apod' src={data.url}></img>
            <h2 className='apod-date'>{data.date}</h2>
            <p className='apod-description'>{data.explanation}</p>
        </div>
    )
    
}

export default APOD;