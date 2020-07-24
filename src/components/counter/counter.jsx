import React from 'react';

export default function Counter({ counter, increment, decrement }) {

    return (
        <div>
            <h1>
                Counter: {counter}
            </h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}
