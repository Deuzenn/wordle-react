import React from 'react';

function Form({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = new React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Z]{5}"
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== 'running'}
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Form;
