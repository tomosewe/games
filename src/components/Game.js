import React, { useState } from "react";

const Game = () => {
  const numberOfGuesses = 10;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const [letter, setLetter] = useState("");
  const [enteredLetters, setEnteredLetters] = useState([]);

  const onLetterEntered = e => {
    if (!enteredLetters.includes(e.target.value)) {
      setEnteredLetters([...enteredLetters, e.target.value]);
    }
    setLetter("");
    console.log(enteredLetters);
  };

  const secretWord = "dinosaur";

  return (
    <div>
      <p>Guess the word... You have {numberOfGuesses} guesses left!</p>
      <p>
        {[...secretWord].map((letter, index) => (
          <span key={`${letter}-${index}`}> X </span>
        ))}
      </p>
      <label htmlFor="letterInput">Enter a letter: </label>
      <input
        type="text"
        id="letterInput"
        value={letter}
        onChange={onLetterEntered}
      />
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
// random word from array of words
// reduce number of gussess if wrong
// don't allow same letter guess more than once
// if correct fill in space
// if same letter is entered, highlight the letter in the selected letters column
// show all letters and remove or grey them out, or put a box around them if they've been guessed
