import React from 'react';
import { useInput } from './useInput';


let UseRefHook = () => {
    
    const [title, resetTitle] = useInput('');
    const [color, resetColor] = useInput('#000000');
    const submit = (e) => {
        e.preventDefault();
        alert(`${title.value} has ${color.value}`);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input {...title} type='text' placeholder='Sound...' />
            <input {...color} type='color' />
            <button>ADD</button>
        </form>
    )

    // const sound = useRef();
    // const color = useRef();
    // const submit = (e) => {
    //     e.preventDefault();
    //     const soundVal = sound.current.value;
    //     const colorVal = color.current.value;
    //     alert(`${soundVal} sounds like ${colorVal}`);
    //     sound.current.value = '';
    //     color.current.value = '';
    // };

    // return (
    //     <form onSubmit={submit}>
    //         <input ref={sound} type='text' placeholder='Sound...' />
    //         <input ref={color} type='color' />
    //         <button>ADD</button>
    //     </form>
    // )
}

export default UseRefHook;