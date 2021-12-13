import React, { useState } from "react";

const InputContext = React.createContext({
    barsCount: 20,
    handleChange: (value) => { }
})


export const InputContextProvider = (props) => {
    const [barsCount, setBarsCount] = useState(20);

    const inputChangeHandler = (value) => {
        setBarsCount(value);
    }
    return (
        <InputContext.Provider value={{ barsCount: barsCount, handleChange: inputChangeHandler }}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputContext;



