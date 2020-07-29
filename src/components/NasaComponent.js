import React, {useEffect, useState } from "react";
import Nasa from "./components/Nasa"
import axios from "axios";

export default function NasaComponent () {


    const [things, setThings] = useState([])
    console.log(things);

    useEffect( () => {
        axios.get("https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=JUeUMwskOxYmIzMB0ia5qheFd3nrwbTuqN1TBlLA")
            .then( response => {
                console.log(response)
                setThings(response.data)
            })
            .catch( error => console.log(error))
    }, [])

    return (
        <div>
            {things.map(thing => <Nasa key={thing.id} thing={thing} />)}
        </div>
    )
}