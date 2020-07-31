import React from "react";
import { Jumbotron } from "reactstrap";

const Nasa = props => {

    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <Jumbotron className="text-center">
                <h1>{nasa.title}</h1>
                <p>{nasa.date}</p>
            </Jumbotron>
            <img src={nasa.url} alt=""/>
            <p>{nasa.copyright}</p>
            <p>{nasa.explanation}</p>
            <p>{nasa.description}</p>
        </div>
    )
}

export default Nasa