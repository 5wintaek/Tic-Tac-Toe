// props 를 넣는 이유는 Player 1 과 X라는 것을 매번 하드코딩으로 바꾸는 것을 피하기 위해 사용
// props 받은 것을 부모한테 넘겨줌

import { useState } from "react";

export default function Player({ startName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(startName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editPlayerName = <span className="player-name">{playerName}</span>;

  // value를 사용함으로써 입력 필드 속의 값을 설정, 하지만 수정이 되질 않음 value 에 설정되어 있는 값이 덮어 씌우기 때문이다.
  // defaultValue 값을 사용하면 이후 특정 값으로 덮어쓰지 못하게 한다.
  // 하지만 value를 그대로 사용해본다. 바뀌는 값을 설정하고 Save를 누르면 그 값이 설정되게끔 설정해야 하는데 useState로 제어하려고 함.
  if (isEditing) {
    editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
