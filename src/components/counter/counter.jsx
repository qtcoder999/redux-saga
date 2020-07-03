import React from 'react';

export default function Counter({ counter, increment, decrement }) {

    return (
        <>
            <div>
                Hello, I am counter {counter}
            </div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}
