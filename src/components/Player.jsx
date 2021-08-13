import { Counter } from "./Counter";

export const Player = ({ playerName, playerScore, incrementClick }) => {
  return (
    <div className="player">
      <span className="player-name">{playerName}</span>
      <Counter />
    </div>
  );
};
