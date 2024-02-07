import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import {useState} from 'react';
import {WINNING_COMBINATIONS} from './data';
import GameOver from './components/GameOver';

const initialGameBaord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// 컴포넌트 함수가 재실행될 때 스스로 재실행되지 않음
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // const [activePlayer, setActivePlayer] = useState('X');
  // activePlayer 는 gameTurns 안에 넣어서 변경 가능하기 떄문에 불필요한 State 상태 제거
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initialGameBaord;

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    // 행2 열2 조합
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (row, col) => {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      console.log('이전 턴 정보:', prevTurns);

      // 이미 생성된 배열을 복사 하는 이유는 불변하는 방식으로 해야하기 때문에
      const updatedTurns = [{square: {row: row, col: col}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player startName="Player1" symbol="X" isActive={activePlayer === 'X'} />
          <Player startName="Player2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
