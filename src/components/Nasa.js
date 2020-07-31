import React from "react";

const Nasa = props => {

    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <h1>{nasa.title}</h1>
            <p>{nasa.date}</p>
            <img src={nasa.url} alt=""/>
            <p>{nasa.copyright}</p>
            <p>{nasa.explanation}</p>
            <h3>OMG! You made another axios get request in your useEffect? Awesome!</h3>
            <p>{nasa.description}</p>
        </div>
    )
}

export default Nasa