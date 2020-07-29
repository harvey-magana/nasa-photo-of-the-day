import React, {useEffect, useState } from "react";

const Nasa = props => {

    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <h1>{nasa.title}</h1>
        </div>
    )
}

export default Nasa