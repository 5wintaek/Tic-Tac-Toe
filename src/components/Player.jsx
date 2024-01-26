// props 를 넣는 이유는 Player 1 과 X라는 것을 매번 하드코딩으로 바꾸는 것을 피하기 위해 사용
// props 받은 것을 부모한테 넘겨줌

export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
