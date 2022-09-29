import { useState, useEffect } from "react";
import Answer from "./Answer";

const Trivia = ({ question, correct, incorrect, score, setScore, finish }: any) => {
  const answers = incorrect.concat(correct);

  const [disable, setDisable] = useState(false)

  const [activeIndex, setActiveIndex] = useState(-1);

  function shuffle(array: any) {
    array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    shuffle(answers);
  }, [answers]);

  return (
    <div className="w-2/3 p-8 outline outline-offset-0 outline-pink-500 shadow-xl">
      <div className="text-xl text-pink-600 font-semibold">{question}</div>
      <div className="flex gap-5 justify-evenly mt-5">
        <Answer
          value={answers[0]}
          isSelected={activeIndex === 0}
          onSelect={() => {
            setActiveIndex(0)
            setDisable(true)
          }}
          score={score}
          setScore={setScore}
          correct={correct}
          finish={finish}
          disable={disable}
        />
        <Answer
          value={answers[1]}
          isSelected={activeIndex === 1}
          onSelect={() => {
            setActiveIndex(1)
            setDisable(true)}}
          score={score}
          setScore={setScore}
          correct={correct}
          finish={finish}
          disable={disable}
        />
        <Answer
          value={answers[2]}
          isSelected={activeIndex === 2}
          onSelect={() => {
            setActiveIndex(2)
            setDisable(true)}}
          score={score}
          setScore={setScore}
          correct={correct}
          finish={finish}
          disable={disable}
        />
        <Answer
          value={answers[3]}
          isSelected={activeIndex === 3}
          onSelect={() => {
            setActiveIndex(3)
            setDisable(true)}}
          score={score}
          setScore={setScore}
          correct={correct}
          finish={finish}
          disable={disable}
        />
      </div>
    </div>
  );
};

export default Trivia;
