import React, { useReducer } from 'react';

const initialState = {
    message: 'hi'
}

function reducer (state, action) {
    switch(action.type) {
        case 'yell': 
            return {
                message: `HEY! I just said {${state.message}}`
            }
        case 'whisper':
            return {
                message: `whisper, I just said {${state.message}}`
            }
    }
}

let Refactoring = () => {
    const [state, dispatch] = useReducer(
        reducer, initialState
    );
    return (
        <>
            <p>Message: {state.message}</p>
            <button onClick={() => dispatch({type: 'yell'})}>YELL</button>
            <button onClick={() => dispatch({type: 'whisper'})}>whisper</button>
        </>
    )
}

export default Refactoring;