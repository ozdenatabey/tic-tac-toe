import { useState } from "react";
import Board from "./Board";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="bg-teal-950 h-screen">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <p className="text-gray-400 text-center font-bold text-xl mt-8">
          Yapılacaklar
        </p>
      </div>
    </>
  );
}

export default Game;
