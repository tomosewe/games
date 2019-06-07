import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Nbsp from "./Nbsp";
import WordService from "../services/word";

const secretWord = WordService.getRandomWord();

const Game = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const vowels = "AEIOU".split("");
  const numbers = "1234567890".split("");

  const [numberOfGuesses, setNumberOfGuesses] = useState(10);
  const [enteredLetters, setEnteredLetters] = useState([
    " ",
    ",",
    ".",
    "?",
    ":",
    "/",
    ...numbers
  ]);

  const onButtonClick = char => {
    console.log(char);
    if (!enteredLetters.includes(char)) {
      setEnteredLetters([...enteredLetters, char]);
      if (!secretWord.includes(char)) {
        setNumberOfGuesses(numberOfGuesses - 1);
      }
    }
  };

  const renderWord = () => (
    <div className="word">
      <Paper className="word__container">
        {numberOfGuesses > 0 ? (
          <React.Fragment>
            {[...secretWord].map((letter, index) => (
              <span
                className={`letterBox ${
                  vowels.includes(letter) ? "vowel" : ""
                }`}
                key={`${letter}-${index}`}
              >
                {" "}
                {enteredLetters.includes(letter) ? letter : <Nbsp />}{" "}
              </span>
            ))}{" "}
            ({secretWord.length})
          </React.Fragment>
        ) : (
          <React.Fragment>
            The secret word was: <strong>{secretWord}</strong>.
          </React.Fragment>
        )}
      </Paper>
    </div>
  );

  const renderKeyboard = () =>
    numberOfGuesses > 0 ? (
      <div className="keyboard">
        {alphabet.map(char => (
          <span className="keyboard__letter" key={`keyboard-${char}`}>
            <Button
              variant="contained"
              color={vowels.includes(char) ? "secondary" : "primary"}
              onClick={e => onButtonClick(char)}
              disabled={enteredLetters.includes(char)}
            >
              {char}
            </Button>
          </span>
        ))}
      </div>
    ) : (
      <p>YOU LOSE THE GAME</p>
    );

  return (
    <div>
      {renderWord()}
      <hr />
      <p>You have {numberOfGuesses} guesses left!</p>
      <hr />
      {renderKeyboard()}
    </div>
  );
};

export default Game;

// reset button
// if same letter is entered, highlight the letter in the selected letters column
// show all letters and remove or grey them out, or put a box around them if they've been guessed
// dont count non letters -use regex
// show spaces nicely
// no numbers
// check uppercase letter
// maybe letters as buttons, clicking them greys them out, and adds the letter/
// option to qwerty or alphabet the keyboard

//game object

/*
  phrase: {
    isGuessed: false;
    word: [{
      letter: a,
      guessed: false,
    }]
  }




*/
