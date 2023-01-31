import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);
    const increaseValue = (num = 1) => setCounter((current) => current + num);
    const decrementValue = (num = 1) => setCounter((current) => current - num);
    const resetValue = () => setCounter((current) => initialValue);
    return {
        counter,
        increaseValue,
        decrementValue,
        resetValue
    }
}