import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

const Nasa = props => {

    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <Jumbotron className="text-center">
                <h1>{nasa.title}</h1>
                <p>Date: {nasa.date}</p>
            </Jumbotron>
            <Row>
                <Col xl="6" className="text-center">
                    <img src={nasa.url} alt=""/>
                    <p>{nasa.copyright}</p>
                </Col>
            </Row>
            <Row>
                <Col xl="6" className="text-justify">
                    <p>{nasa.explanation}</p>
                </Col>
            </Row>

        </div>
    )
}

export default Nasa