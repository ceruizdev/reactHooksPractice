import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
   const [counter, setCounter] = useState(10); 

   const increment = useCallback(
     () => {
        setCounter((value) => value + 1);
     },
     [],
   )
   
  return (
    <>
        <div>CallBackHook: {counter}</div>
        <ShowIncrement  increment={increment} />
    </>

  )
}
