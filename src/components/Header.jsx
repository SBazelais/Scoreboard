import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

export const Header = (props) => {
  const { title, players } = props;
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};
