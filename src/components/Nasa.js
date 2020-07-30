import React, {useEffect, useState } from "react";

const Nasa = props => {

    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <h1>{nasa.title}</h1>
            <p>{nasa.date}</p>
            <img src={nasa.url}/>
            <p>{nasa.copyright}</p>
            <p>{nasa.explanation}</p>
            <p>{nasa.benefits}</p>
        </div>
    )
}

export default Nasa