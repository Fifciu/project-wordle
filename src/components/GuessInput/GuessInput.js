import React from 'react';
import { MAX_LETTERS } from '../../constants';

function GuessInput({ onAttempt, disabled, guess, setGuess }) {
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      console.log({ guess });
      onAttempt(guess);
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" maxLength={MAX_LETTERS} minLength={MAX_LETTERS} pattern={`[A-Z]{${MAX_LETTERS}}`} required disabled={disabled} value={guess} onChange={(event) => {
        setGuess(event.target.value.toUpperCase());
      }} />
    </form>
    );
}

export default GuessInput;
