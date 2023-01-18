import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
 const { counter, increaseValue, decrementValue, resetValue } = useCounter();
  return (
    <>
        <h2>Counter with Hook: {counter}</h2>
        <hr />
        <button className="btn btn-primary" onClick={() => increaseValue(1)}>+1</button>
        <button className="btn btn-primary" onClick={() =>  decrementValue(2)}>-1</button>
        <button className="btn btn-primary" onClick={resetValue}>Reset</button>
    </> 
  )
}
