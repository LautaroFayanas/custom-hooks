import { useState } from "react"

//Logica de Hook personalizado, importado en CounterWithCustomHook

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if(counter === 0) return;
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}