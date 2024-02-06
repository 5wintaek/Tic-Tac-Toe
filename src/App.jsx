import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import {useState} from 'react';

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
