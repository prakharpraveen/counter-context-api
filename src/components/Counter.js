import { useCounterContext } from '../context/CounterContext';

const Counter = () => {
    const { counter, decreaseCounter, increaseCounter } = useCounterContext();
    console.log("counter inside counter", counter);
    return (
        <div>
            <h1> Initial Counter Value is: 20 </h1>
            <button style={{ margin: "10px" }} onClick={decreaseCounter}> - </button>
             <b style={{ fontSze: "large" }}> Counter: {counter} </b>
            <button style={{ margin: "10px" }} onClick={increaseCounter}> + </button>
        </div>
    )
}

export default Counter;
