import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);
    const increaseValue = (num = 1) => setCounter(counter + num);
    const decrementValue = (num = 1) => setCounter(counter - num);
    const resetValue = () => setCounter(initialValue);
    return {
        counter,
        increaseValue,
        decrementValue,
        resetValue
    }
}