import React from "react";
import Formhanlder from "./Components/form";

function App(){
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class = "navbar-brand">Node-React App</a>
        </div>
      </nav>
      <Formhanlder />
    </div>
  )
}
export default App