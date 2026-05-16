import React, { useState } from "react";
import circleIcon from "../assets/circle.png";
import crossIcon from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const Game = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${crossIcon}" alt="X" style="width: 60%; height: 60%;" />`;
            data[num] = "X";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src="${circleIcon}" alt="O" style="width: 60%; height: 60%;" />`;
            data[num] = "O";
            setCount(count + 1);
        }
        checkWin();
    };

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") won(data[0]);
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") won(data[3]);
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") won(data[6]);
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") won(data[0]);
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") won(data[1]);
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") won(data[2]);
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") won(data[0]);
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") won(data[2]);
        else if (count === 8) {
            setLock(true);
            setTimeout(() => {
                alert("It's a draw!");
            }, 600);
        }
    };

    const won = (winner) => {
        setLock(true);
        setTimeout(() => {
            alert(`${winner} wins!`);
        }, 600);
    };

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = "";
        });
    };

    return (
        <div className="game-container">
            <h1 className="title">Tic Tac Toe</h1>

            <div className="board">
                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 0)}></div>
                    <div className="box" onClick={(e) => toggle(e, 1)}></div>
                    <div className="box" onClick={(e) => toggle(e, 2)}></div>
                </div>

                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 3)}></div>
                    <div className="box" onClick={(e) => toggle(e, 4)}></div>
                    <div className="box" onClick={(e) => toggle(e, 5)}></div>
                </div>

                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 6)}></div>
                    <div className="box" onClick={(e) => toggle(e, 7)}></div>
                    <div className="box" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>

            <button className="reset-btn" onClick={reset}>Reset Game</button>
        </div>
    );
};

export default Game;