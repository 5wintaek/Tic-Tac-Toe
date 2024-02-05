const initialGameBaord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// turns 는 배열
export default function GameBoard({onSelectSquare, turns}) {
  let gameBoard = initialGameBaord;

  for (const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
  // const [gameboard, setGameBoard] = useState(initialGameBaord);

  // const handleGameBoard = (rowIndex, colIndex) => {
  //   setGameBoard((preGameBoard) => {
  //     const updatedBoard = [...preGameBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
