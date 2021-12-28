import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    miliseconds: number;
}

export const Timer = ( { miliseconds }: TimerArgs ) => {

    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {

        if( ref.current ) {
            clearInterval( ref.current );
        }
        ref.current = setInterval( () => setSeconds( sec => sec + 1 ), miliseconds );

    }, [miliseconds] );

    return (
        <div>
            <h4 className="text-lg">Timer: <small>{ seconds }</small></h4>
        </div>
    )
}
