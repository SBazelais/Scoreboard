import React, { useState } from "react";

export const Counter = ({ playerScore }) => {
  const [scoreValue, setScoreValue] = useState(playerScore);

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => setScoreValue(scoreValue - 1)}
      >
        -
      </button>
      <span className="counter-score">{scoreValue}</span>
      <button
        className="counter-action increment"
        onClick={() => setScoreValue(scoreValue + 1)}
      >
        +
      </button>
    </div>
  );
};
