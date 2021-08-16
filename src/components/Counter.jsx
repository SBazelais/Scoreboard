export const Counter = ({ handleScoreChange, index, playerScore }) => {
  console.log(playerScore);
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => handleScoreChange(index, -1)}
      >
        -
      </button>
      <span className="counter-score">{playerScore}</span>
      <button
        className="counter-action increment"
        onClick={() => handleScoreChange(index, +1)}
      >
        +
      </button>
    </div>
  );
};
