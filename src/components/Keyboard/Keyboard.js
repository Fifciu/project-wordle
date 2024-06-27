import React from 'react';
import { checkGuess } from '../../game-helpers';

const KEYBOARD_LINES = [
  'qwertyuiop'.toUpperCase(),
  'asdfghjkl'.toUpperCase(),
  'zxcvbnm'.toUpperCase()
];

function Keyboard({ guesses, answer, onBtnClick }) {
  const checkedGuesses = guesses.map((guess) => checkGuess(guess.label, answer));
  const letters = checkedGuesses.reduce((total, curr) => {
    const state = {...total};
    curr.forEach(({ letter, status }) => {
      if (state.letter) {
        return;
      }
      state[letter] = status;
    });
    return state;
  }, {});

  return (
    <div className="keyboard">
        {KEYBOARD_LINES.map((line, index) => (
          <div className="line" key={line}>
            {index === 2 && <button className="letter" type="button" onClick={() => onBtnClick('ENTER')}>Enter</button>}
            {line.split('').map((letter) => (
              <button className={'letter' + (letters[letter] ? ` ${letters[letter]}` : '')} type="button" key={letter} onClick={() => onBtnClick(letter.toUpperCase())}>{letter}</button>
            ))}
            {index === 2 && <button className="letter" type="button" onClick={() => onBtnClick('REMOVE')}>RM</button>}
          </div>
        ))}
    </div>
  );
}

export default Keyboard;
