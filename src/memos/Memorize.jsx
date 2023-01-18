import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
    const { counter, increaseValue } = useCounter(0);
  return (
    <>
        <h1>Counter <Small value={counter}/></h1>
        <hr />
        <button className="btn btn-primary" onClick={() => increaseValue() }>+1</button>
        <button className="btn btn-outline-primary" onClick={ () => setShow(!show)}>show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
