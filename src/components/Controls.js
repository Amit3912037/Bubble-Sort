import React, { useState, useContext } from 'react';
import InputContext from '../store/input-context';
import "./Controls.css";

const Controls = () => {

    const [inProgress, setinProgress] = useState(false);
    const [userInput, setUserInput] = useState(20);
    const InputCtx = useContext(InputContext);

    const resetHandler = () => {
        window.location.reload();
    }

    const BubbleSort = async () => {
        let bars = document.querySelectorAll(".bar");

        setinProgress(true)
        for (let i = 0; i < bars.length; i += 1) {
            let flag = 0;
            for (var j = 0; j < bars.length - i - 1; j += 1) {

                bars[j].style.backgroundColor = "#FF4949";
                bars[j + 1].style.backgroundColor = "#FF4949";

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 500)
                );

                var value1 = Number(bars[j].childNodes[0].innerHTML);
                var value2 = Number(bars[j + 1].childNodes[0].innerHTML);
                if (value1 > value2) {
                    flag = 1;
                    swap(bars[j], bars[j + 1]);
                    bars = document.querySelectorAll(".bar");
                }
                bars[j].style.backgroundColor = "#6b5b95";
                bars[j + 1].style.backgroundColor = "#6b5b95";
            }

            bars[bars.length - i - 1].style.backgroundColor = "#28a745";
            if (flag === 0) {
                for (let i = 0; i < bars.length; i++) {
                    bars[i].style.backgroundColor = "#28a745";
                }
                break;
            }
        }
        setinProgress(false);
    }

    const swap = (el1, el2) => {
        let container = document.getElementById("graph");
        container.insertBefore(el2, el1);

    }
    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
        InputCtx.handleChange(event.target.value);
    }

    return (
        <div className='action-buttons'>
            <button onClick={resetHandler}>{inProgress ? "Stop sorting and Reset" : "Generate New Data"}</button>
            <button disabled={inProgress} onClick={BubbleSort}>Start Sorting</button>
            <input disabled={inProgress} onChange={inputChangeHandler} value={userInput} type="range" min="10" max="50" />
        </div>
    )
}

export default Controls;
