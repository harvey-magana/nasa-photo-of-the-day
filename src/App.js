import React from "react";
import NasaComponent from "./components/NasaComponent"
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaComponent />
    </div>
  );
}

export default App;
