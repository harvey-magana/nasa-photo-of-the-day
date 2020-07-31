import React from "react";
import NasaComponent from "./components/NasaComponent"
//import { Container } from "reactstrap";
import Container from '@material-ui/core/Container';
import "./style.css";

function App() {
  return (
    <Container>
      <div className="App">
          <NasaComponent />
      </div>
    </Container>
  );
}

export default App;
