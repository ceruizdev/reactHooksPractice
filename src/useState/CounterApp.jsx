import { useState } from "react"

export const CounterApp = () => {
  const [{counterOne, counterTwo, counterThree}, setCounter] = useState({
    counterOne: 10,
    counterTwo: 20,
    counterThree: 30
  });

  const counterHandler = () => {
    setCounter(val => ({
        ...val,
        counterThree : counterThree + 1 
    }))
    
  };

  return (
    <>
        <h1>- Counter: {counterOne}</h1>
        <h1>- Counter: {counterTwo}</h1>
        <h1>- Counter: {counterThree}</h1>
        <hr />
        <button className="btn" onClick={counterHandler}>+1</button>
    </>
  )
}
