import { FC } from "react";

interface Score {
  score: number;
}

const Score: FC<Score> = ({ score }) => {
  const total = 10;
  return (
    <>
      <h1 className="text-5xl text-sky-500 font-bold m-5">
        Score: {score} / {total}
      </h1>
      {score > 6 ? (
        <p className="text-3xl text-center m-3">Not bad, not bad 😎</p>
      ) : (
        <p className="text-3xl text-center m-3">You can do better... 😳</p>
      )}
    </>
  );
};

export default Score;
