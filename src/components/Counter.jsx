import React from "react";

export const Counter = ({ playerScore, incrementClick }) => {
  const [increment, setIncrement] = React.useState(0);

  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{increment}</span>
      <button
        className="counter-action increment"
        onClick={() => setIncrement(increment + 1)}
      >
        +
      </button>
    </div>
  );
};
