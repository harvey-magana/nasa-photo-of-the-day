import React, {useEffect, useState } from "react";
import Nasa from "../components/Nasa"
import axios from "axios";

export default function NasaComponent () {


    const [things, setThings] = useState([])
    let one = "https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=JUeUMwskOxYmIzMB0ia5qheFd3nrwbTuqN1TBlLA";
    let two = "https://api.nasa.gov/techport/api/projects/17792?api_key=JUeUMwskOxYmIzMB0ia5qheFd3nrwbTuqN1TBlLA";
    
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);


    useEffect( () => {
        //axios.get("https://api.nasa.gov/planetary/apod?date=2020-07-27&api_key=JUeUMwskOxYmIzMB0ia5qheFd3nrwbTuqN1TBlLA")
        axios.all([requestOne, requestTwo])
            .then(axios.spread( (...response) => {
                console.log(response[0].data)
                console.log(response[1].data)
                setThings([response[0].data, response[1].data.project])
            }))
            .catch( error => console.log(error))
        }, [])

    return (
        <div>
            {
                things.map(thing => <Nasa 
                    key={thing.id} nasa={thing}
                />)
            }
        </div>
    )
}