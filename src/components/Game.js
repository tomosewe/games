import React, { useState } from "react";
import WordService from "../services/word";

const secretWord = WordService.getRandomWord();

const Game = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const vowels = "aeiou".split("");

  const [numberOfGuesses, setNumberOfGuesses] = useState(10);
  const [userLetter, setLetter] = useState("");
  const [enteredLetters, setEnteredLetters] = useState([]);

  const onLetterEntered = e => {
    if (!enteredLetters.includes(e.target.value)) {
      setEnteredLetters([...enteredLetters, e.target.value]);
      if (!secretWord.includes(e.target.value)) {
        setNumberOfGuesses(numberOfGuesses - 1);
      }
    }
    setLetter("");
    console.log(enteredLetters);
  };

  return (
    <div>
      <p>Guess the word... You have {numberOfGuesses} guesses left!</p>
      {numberOfGuesses > 0 ? (
        <p>
          {[...secretWord].map((letter, index) => (
            <span
              className={`letterBox ${vowels.includes(letter) ? "vowel" : ""}`}
              key={`${letter}-${index}`}
            >
              {" "}
              {enteredLetters.includes(letter) ? letter : "_"}{" "}
            </span>
          ))}{" "}
          ({secretWord.length} letters)
        </p>
      ) : (
        <p>
          The secret word was: <strong>{secretWord}</strong>.
        </p>
      )}
      {numberOfGuesses > 0 ? (
        <React.Fragment>
          <label htmlFor="letterInput">Enter a letter: </label>
          <input
            type="text"
            id="letterInput"
            value={userLetter}
            onChange={onLetterEntered}
          />
        </React.Fragment>
      ) : (
        <p>YOU LOSE THE GAME</p>
      )}
      <hr />
      <p>Your entered letters: </p>
      <p>{enteredLetters.join(", ")}</p>
      <hr />
      <p>Possible letters: </p>
      <p>{alphabet.join(", ")}</p>
    </div>
  );
};

export default Game;

// reset button
// if same letter is entered, highlight the letter in the selected letters column
// show all letters and remove or grey them out, or put a box around them if they've been guessed
// dont count non lettes -use regex
// show spaces nicely
// no numbers
// check uppercase letters
