import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <h1>Hangman</h1>
        <Game />
      </main>
    </React.Fragment>
  );
}

export default App;
