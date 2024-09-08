/* eslint-disable react/prop-types */

function Square({ value, onSquareClick }) {
  return (
    <button
      className="border-2 border-black w-32 h-32 font-bold text-7xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
