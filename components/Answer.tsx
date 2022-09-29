export default function Answer({
  value,
  isSelected,
  onSelect,
  score,
  setScore,
  correct,
  finish,
  disable
}: any) {
  const styles = {
    backgroundColor: isSelected ? "#FF016F" : "",
  };

  function addScore() {
    if (!finish) {
      if (correct === value) {
        setScore(score + 1);
      }
    }
  }

  return (
    <button
      style={styles}
      className="p-2 rounded-md w-48 bg-slate-400 m-3"
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
