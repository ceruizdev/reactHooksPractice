import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = ( iteration = 100 ) => {
  for(let i = 0; i < iteration; i++){
    console.log('New execution');
  }
  return `${iteration} number`;
}

export const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increaseValue } = useCounter(4000);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter <small>{counter}</small></h1>
        <hr />
        <h4> { memorizedValue } </h4>
        <button className="btn btn-primary" onClick={() => increaseValue() }>+1</button>
        <button className="btn btn-outline-primary" onClick={ () => setShow(!show)}>show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
