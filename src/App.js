import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <main>
          <h1>Hangman</h1>
          <Game />
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
