import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import StartMenu from "../components/StartMenu";
import Quiz from "../components/Quiz";
import type { Question, GetQuestionResults } from "../types";

const Home: NextPage<{ questions: Question[] }> = ({ questions }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>
      <Head>
        <title>Quiz game</title>
      </Head>
      <div className="">
        {!isStarted && <StartMenu startGame={() => setIsStarted(true)} />}
        {isStarted && <Quiz questions={questions} />}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  const { results }: GetQuestionResults = await res.json();

  return {
    props: {
      questions: results,
    },
  };
};

export default Home;
