import { useState, useRef } from "react";
import Trivia from "./Trivia";
const he = require("he");
import Score from "./Score";

const Quiz = ({ data }: any) => {
  const [finish, setFinish] = useState(false);

  const [score, setScore] = useState(0);

  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const trivias = data.map((trivia: any) => (
    <Trivia
      key={trivia.id}
      question={he.decode(trivia.question)}
      correct={he.decode(trivia.correct_answer)}
      incorrect={trivia.incorrect_answers}
      score={score}
      setScore={setScore}
      finish={finish}
    />
  ));

  return (
    <>
      <div className="flex flex-col align-middle justify-center items-center">
        <div ref={ref}>{finish && <Score score={score} />}</div>
        {!finish && (
          <h1 className="text-4xl font-bold m-5 text-sky-500">
            Welcome to the quiz! Have fun!
          </h1>
        )}
        {!finish && (
          <p className="text-xl text-center m-5">
            Be careful! You have only one chance to select correct answer per
            one question; Choose wisely!
          </p>
        )}
        {trivias}
        {!finish && (
          <button
            className="text-white p-5 text-lg rounded-md m-5 bg-red-500 self-center"
            onClick={() => {
              setFinish(true);
              handleClick();
            }}
          >
            Check your answers!
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
