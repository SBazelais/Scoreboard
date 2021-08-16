import { Counter } from "./Counter";

export const Player = ({
  id,
  playerName,
  removePlayer,
  handleScoreChange,
  index,
  playerScore
}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {playerName}
      </span>
      <Counter
        handleScoreChange={handleScoreChange}
        index={index}
        playerScore={playerScore}
      />
    </div>
  );
};
