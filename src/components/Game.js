import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import WordService from "../services/word";

const secretWord = WordService.getRandomWord();

const Game = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const vowels = "aeiou".split("");

  const [numberOfGuesses, setNumberOfGuesses] = useState(10);
  const [enteredLetters, setEnteredLetters] = useState([]);

  const onButtonClick = char => {
    console.log(char);
    if (!enteredLetters.includes(char)) {
      setEnteredLetters([...enteredLetters, char]);
      if (!secretWord.includes(char)) {
        setNumberOfGuesses(numberOfGuesses - 1);
      }
    }
  };

  const renderKeyboard = () =>
    numberOfGuesses > 0 ? (
      <div className="keyboard">
        {alphabet.map(char => (
          <span className="keyboard__letter" key={`keyboard-${char}`}>
            <Button
              variant="contained"
              color="primary"
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
      <div className="word">
        {numberOfGuesses > 0 ? (
          <p>
            {[...secretWord].map((letter, index) => (
              <span
                className={`letterBox ${
                  vowels.includes(letter) ? "vowel" : ""
                }`}
                key={`${letter}-${index}`}
              >
                {" "}
                {enteredLetters.includes(letter) ? letter : "_"}{" "}
              </span>
            ))}{" "}
            ({secretWord.length})
          </p>
        ) : (
          <p>
            The secret word was: <strong>{secretWord}</strong>.
          </p>
        )}
      </div>
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
