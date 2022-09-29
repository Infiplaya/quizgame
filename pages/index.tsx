import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import StartMenu from '../components/StartMenu'
import Quiz from "../components/Quiz"
import { GetStaticProps } from 'next';

const Home: NextPage = ({questions}:any) => {
  
  const [isStarted, setIsStarted] = useState(false)
  const data = questions
  return (
    <>
    <Head>
      <title>Quiz game</title>
    </Head>
    <div className="">
    {!isStarted && <StartMenu isStarted={isStarted === false} startGame={() => setIsStarted(true)}/>}
    {isStarted && <Quiz data={data}/>}
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
  const {results}= await res.json();

  return {
      props: {
          questions: results
      }
  }
}

export default Home
