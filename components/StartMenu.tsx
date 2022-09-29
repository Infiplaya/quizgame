import { FC } from "react";

interface StartMenu {
  startGame: () => void;
}

const StartMenu: FC<StartMenu> = ({ startGame }) => {
  return (
    <>
      <div className="flex flex-col p-5 align-middle justify-center items-center h-screen">
        <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
          Quiz game wow
        </h1>
        <p className="mt-5 text-2xl mb-5 font-medium">
          Answer this trivia questions!
        </p>
        <button
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  rounded-xl mt-5 p-3 w-40"
          onClick={startGame}
        >
          <p className="text-white font-semibold text-lg">Start Game</p>
        </button>
      </div>
    </>
  );
};

export default StartMenu;
