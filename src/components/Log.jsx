export default function Log({ turns, players }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { square, player } = turn;
        const { row, col } = square;
        return (
          <li key={`${row},${col}`}>
            {players[player]} selected {row},{col}
          </li>
        );
      })}
    </ol>
  );
}
