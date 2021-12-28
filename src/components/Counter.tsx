import { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = ( number: number = 1 ): void => {
        setCounter( counter + number );
    };

    return (
        <>
            <h3>Counter: useState</h3>
            <span>Valor: { counter }</span>
            <br />
            <button className="px-5 py-2 shadow rounded bg-indigo-600 font-bold	text-sm hover:bg-indigo-400 mr-2" onClick={ () => increment(1) }>+1</button>
            <button className="px-5 py-2 shadow rounded bg-indigo-600 font-bold	text-sm hover:bg-indigo-400 mr-2" onClick={ () => increment(2) }>+2</button>
            <button className="px-5 py-2 shadow rounded bg-indigo-600 font-bold	text-sm hover:bg-indigo-400 mr-2" onClick={ () => setCounter(0) }>Reset</button>
        </>
    )
}
