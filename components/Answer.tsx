import { useState } from "react";

export default function Answer({
  value,
  isSelected,
  onSelect,
  score,
  setScore,
  correct,
  finish,
  disable,
}: any) {
  const [changeColor, setChangeColor] = useState(false);

  function addScore() {
    if (!finish) {
      if (correct === value) {
        setScore(score + 1);
      }
    }
  }

  return (
    <button
      className={
        isSelected
          ? "bg-blue-300 m-3 p-2 rounded-md w-48"
          : "p-2 rounded-md w-48 bg-slate-400 m-3"
      }
      disabled={disable}
      onClick={() => {
        onSelect();
        addScore();
      }}
    >
      {value}
    </button>
  );
}
