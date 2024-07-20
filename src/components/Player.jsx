import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, editedName);
    }
  }

  function handleNameChange(event) {
    setEditedName(event.target.value);
  }

  let playerName = <span className="player-name">{editedName}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={editedName}
        onChange={handleNameChange}
      />
    );
    buttonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonText}</button>
    </li>
  );
}
