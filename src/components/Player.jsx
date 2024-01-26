// props 를 넣는 이유는 Player 1 과 X라는 것을 매번 하드코딩으로 바꾸는 것을 피하기 위해 사용
// props 받은 것을 부모한테 넘겨줌

import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;
  // let buttonCaption = "Edit";

  // value를 사용함으로써 입력 필드 속의 값을 설정, 하지만 value 만 설정해주면 name 의 기본값만 뜨고 수정X
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // buttonCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
