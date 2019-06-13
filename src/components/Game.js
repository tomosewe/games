import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Nbsp from "./Nbsp";
import WordService from "../services/word";

const secretWord = WordService.getRandomWord();

const Game = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const vowels = "AEIOU".split("");
  const numbers = "1234567890".split("");

  const [gameWon, setGameWon] = useState(false);
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

  const checkGameWon = () => {
    if ([...secretWord].every(letter => enteredLetters.includes(letter))) {
      setGameWon(true);
    }
  };

  const onKeyDown = (e) => {
    e.stopImmediatePropagation()
    const pressedKey = String.fromCharCode(e.keyCode)
    if (!enteredLetters.includes(pressedKey) || e.keyCode >= 65 || e.keyCode <= 90) {
      processLetter(pressedKey)
    }
  }

  useEffect(() => {
    checkGameWon();
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const processLetter = char => {
    if (!enteredLetters.includes(char)) {
      setEnteredLetters([...enteredLetters, char]);
      if (!secretWord.includes(char)) {
        setNumberOfGuesses(numberOfGuesses - 1);
      }
    }
  };

  const onButtonClick = char => {
    processLetter(char);
  };

  const renderWord = () => (
    <section className="word">
      <Paper className="word__container">
        {!gameWon && numberOfGuesses > 0 ? (
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
            <p>
              The secret word was: <strong>{secretWord}</strong>.
          </p>
          )}
      </Paper>
    </section>
  );

  const renderKeyboard = () =>
    !gameWon && numberOfGuesses > 0 ? (
      <section className="keyboard">
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
      </section>
    ) : gameWon ? (
      <p>You guessed the word correctly!</p>
    ) : (
          <p>YOU LOSE THE GAME</p>
        );

  return (
    <section>
      {renderWord()}
      <hr />
      <p>You have {numberOfGuesses} guesses left!</p>
      <hr />
      {renderKeyboard()}
    </section>
  );
};

export default Game;

/* @TODO:
   reset button
   option to qwerty or alphabet the keyboard
   draw the hangman dude
   correctly wrap the letters onto new lines
   using keyboard should trigger buttons - see javascript30 first exercise
*/
