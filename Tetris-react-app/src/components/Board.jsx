import { useEffect, useState } from "react";

const cols = 7;
const rows = 12;
const initialBoard = {
  cols,
  rows,
  board: new Array(rows).fill(null).map(() => new Array(cols).fill(0)),
};

export const Board = () => {
  const [board, setBoard] = useState(undefined);

  useEffect(() => {
    setBoard(initialBoard);
  }, []);

  return (
    <>
      {board == undefined || (
        <div className="">
          {board.board.map((row,idx) => (
            <div key={idx} className="flex ">
              {row.map((col, idx) => {
                return (
                  <div key={idx} className="w-12 h-12 bg-gray-700 border border-gray-200"></div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
