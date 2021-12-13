import React, { useEffect, useState, useContext, useCallback } from 'react';
import Bar from './Bar';
import './Graph.css';
import InputContext from '../store/input-context';

const Graph = () => {
    const InputCtx = useContext(InputContext);
    const bars = InputCtx.barsCount;
    const [array, setarray] = useState(null);

    const generateRandomData = useCallback(() => {
        let temp = [];

        for (var i = 0; i < bars; i++) {
            var value = Math.ceil(Math.random() * (100 - 20) + 20);
            var newele = {
                value: value,
                height: value * 3,
                bgColor: "#6b5b95"

            }
            temp.push(newele);
        }

        const totalBars = document.querySelectorAll(".bar");
        for (let i = 0; i < totalBars.length; i++) {
            totalBars[i].style.backgroundColor = "#6b5b95";
        }
        setarray(temp);

    }, [bars])


    useEffect(() => {
        generateRandomData();
    }, [bars, generateRandomData])


    return (
        <React.Fragment>
            {
                array && <div id="graph">
                    {
                        array.map((element, i) => {
                            return (
                                <Bar key={i} element={element} />
                            )
                        })
                    }
                </div>
            }
        </React.Fragment>
    )
}

export default Graph;



