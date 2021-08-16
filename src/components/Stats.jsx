const Stats = ({ players }) => {
  const totalPlayers = players.length;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
