import { useReducer } from "react";

const initialState = {
    counter: 0
};

type ActionType =
| { type: 'increment' }
| { type: 'decrement' }
| { type: 'reset', payload: number };

const counterReducer = ( state: typeof initialState, action: ActionType ) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'reset':
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state;
    };
};

export const CounterReducer = () => {
    const [{ counter }, dispatch ] = useReducer( counterReducer, initialState );
    return (
        <>
            <h2>Counter: { counter }</h2>
            <br />
            <button className="px-5 py-2 shadow rounded bg-red-600 font-bold	text-sm hover:bg-red-400 mr-2"
                    onClick={ () => dispatch( { type: 'increment' } ) }>+1</button>
            <button className="px-5 py-2 shadow rounded bg-red-600 font-bold	text-sm hover:bg-red-400 mr-2"
                    onClick={ () => dispatch( { type: 'decrement' } ) }>-1</button>
            <button className="px-5 py-2 shadow rounded bg-red-600 font-bold	text-sm hover:bg-red-400 mr-2"
                    onClick={ () => dispatch( { type: 'reset', payload: initialState.counter } ) }>Reset</button>
        </>
    )
}
