import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessHistory from '../GuessHistory';
import BannerSad from '../BannerSad';
import BannerHappy from '../BannerHappy';
import Keyboard from '../Keyboard';
import { NUM_OF_GUESSES_ALLOWED, MAX_LETTERS } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guess, setGuess] = React.useState('');
  const [guessHistory, setGuessHistory] = React.useState([]);
  function addNewGuessToHistory(guess) {
    const newGuessHistory = [...guessHistory, {
      id: Math.random(),
      label: guess
    }];

    setGuessHistory(newGuessHistory);
    setGuess('');
  }

  function wonGame() {
    if (!guessHistory.length) {
      return false;
    }
    return guessHistory[guessHistory.length - 1].label === answer;
  }

  function lostGame() {
    return guessHistory.length >= NUM_OF_GUESSES_ALLOWED;
  }

  function finishedGame() {
    return wonGame() || lostGame();
  }

  function restartGame() {
    setGuessHistory([]);
    setAnswer(sample(WORDS));
  }

  function onBtnClick(btn) {
    if (btn === 'ENTER') {
      const form = document.querySelector('.guess-input-wrapper');
      if(form.checkValidity()) {
        addNewGuessToHistory(guess);
      } else {
        form.reportValidity();
      }
    } else if(btn === 'REMOVE' && guess.length >= 1) {
      setGuess(guess.slice(0, guess.length - 1));
    } else if(!['REMOVE', 'ENTER'].includes(btn) && guess.length < MAX_LETTERS) {
      setGuess(guess + btn)
    }
  }

  return <>
    {wonGame() && <BannerHappy counter={guessHistory.length}>
        <button type="button" onClick={restartGame}>Restart</button>
      </BannerHappy>}
    {lostGame() && <BannerSad answer={answer}>
        <button type="button" onClick={restartGame}>Restart</button>
      </BannerSad>}
    <GuessHistory guesses={guessHistory} answer={answer} />
    <GuessInput onAttempt={addNewGuessToHistory} disabled={finishedGame()} guess={guess} setGuess={setGuess}/>
    <Keyboard guesses={guessHistory} answer={answer} onBtnClick={onBtnClick} />
  </>;
}

export default Game;
