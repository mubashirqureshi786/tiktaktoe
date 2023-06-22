import React, { useState } from "react";
import Square from "./Square";
import "./TikTakStyle.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [intO, setIntO] = useState(false);

  const checkWinner = () => {
    const winnerArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let Logic of winnerArrays) {
      const [a, b, c] = Logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleClicked = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = intO ? "O" : "X";
    setState(copyState);
    setIntO(!intO);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              fontSize: "30px",
            }}
          >
            <h6>Congrates {isWinner} you win the Game</h6>
            <br />
            <button
              onClick={handleReset}
              style={{
                marginTop: "15px",
                padding: "10px 30px",
                fontSize: "24px",
                fontWeight: "400",
                color: "#fff",
                backgroundColor: "lightgreen",
                border: "none",
                cursor: "pointer",
              }}
            >
              Play Again
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="board-rows">
            <h2>Player {intO ? "O" : "X"} turns</h2>
          </div>
          <div className="board-rows">
            <Square onClick={() => handleClicked(0)} value={state[0]} />
            <Square onClick={() => handleClicked(1)} value={state[1]} />
            <Square onClick={() => handleClicked(2)} value={state[2]} />
          </div>
          <div className="board-rows">
            <Square onClick={() => handleClicked(3)} value={state[3]} />
            <Square onClick={() => handleClicked(4)} value={state[4]} />
            <Square onClick={() => handleClicked(5)} value={state[5]} />
          </div>
          <div className="board-rows">
            <Square onClick={() => handleClicked(6)} value={state[6]} />
            <Square onClick={() => handleClicked(7)} value={state[7]} />
            <Square onClick={() => handleClicked(8)} value={state[8]} />
          </div>
          <div className="board-rows" style={{ marginTop: "15px" }}>
            <button onClick={handleReset}>Reset</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
