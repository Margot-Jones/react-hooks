import React, { useReducer } from 'react';

let Refactoring = () => {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
    );
    return (
        <p onClick={ () => setNumber(1) }>Click digit - {'>'} <b>{number}</b></p>
    )
}

export default Refactoring;