import { createContext, useContext, useState } from "react";

const counterContext = createContext({
    counter: 20,
    decreaseCounter: () => { },
    increaseCounter: () => { },
});

export function useCounterContext() {
    const { counter, decreaseCounter, increaseCounter } = useContext(counterContext);
    return { counter, decreaseCounter, increaseCounter };
}

export function CounterContextProvider({ children }) {
    const [counter, setCounter] = useState(20);

    function decreaseCounter() {
        setCounter(currentCounter => currentCounter - 1);
    }

    function increaseCounter() {
        setCounter(currentCounter => currentCounter + 1);
    }

    return (
        <counterContext.Provider value={{ counter, decreaseCounter, increaseCounter }}>
            {children}
        </counterContext.Provider>
    )
}