import { Timer } from "./Timer"
import { useState } from 'react';

export const TimerPadre = () => {

    const [miliseconds, setMiliseconds] = useState(1000);

    return (
        <div>
            <span>Miliseconds { miliseconds }</span>
            <br />
            <button className="px-5 py-2 shadow rounded bg-green-600 font-bold text-sm hover:bg-green-400 mr-2"
                    onClick={ () => setMiliseconds( 1000 ) }>1000</button>
            <button className="px-5 py-2 shadow rounded bg-green-600 font-bold text-sm hover:bg-green-400 mr-2"
                    onClick={ () => setMiliseconds( 2000 ) }>+2000</button>
            <Timer miliseconds={ miliseconds }/>
        </div>
    )
}
