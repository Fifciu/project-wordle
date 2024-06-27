import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, MAX_LETTERS } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessHistory({ guesses, answer }) {
  const emptyRows = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const cells = range(0, MAX_LETTERS);

  const checkedGuesses = guesses.map((guess) => checkGuess(guess.label, answer));

  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={guess.id}>
          {checkedGuesses[index].map(({letter, status}, index) => (
            <span className={`cell ${status}`} key={index}>{letter}</span>
          ))}
        </p>
      ))}
      {range(0, emptyRows).map((val) => (
        <p className="guess" key={val}>
          {cells.map((cell, index) => (
            <span className="cell" key={`${cell} ${index}`}></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
