import Stats from "./Stats";

export const Header = ({ title, players }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
    </header>
  );
};
