import { Counter } from "./Counter";

export const Player = ({ id, playerName, removePlayer, playerScore }) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {playerName}
      </span>
      <Counter playerScore={playerScore} />
    </div>
  );
};
