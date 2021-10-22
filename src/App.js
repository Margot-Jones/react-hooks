import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa';
import Refactoring from './components/Refactoring';
import UseRefHook from './components/UseRefHook';

const createArray = (length) => [
  ...Array(length)
];

let Star = ( {selected, onSelect} ) => {
  return(
    <FaStar color={selected ? 'black' : 'grey'} 
      onClick={onSelect}/>
  );
}


let StarRating = ({ totalStars = 5 }) => {
  const [selected, setSelected] = useState(0);
  return <>
    {createArray(totalStars).map( (n, i) => <Star 
      key={i} 
      selected={selected > i} 
      onSelect={() => setSelected(i+1)} /> 
    )}
  </>
}

let App = ( {paragraph} ) => {
  const [name, setName] = useState('react.js');

  const [checked, setChecked] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData)
  }, [])

  return (
    <div style={{marginLeft: '5%'}}>

      <h1>{paragraph}</h1>
      <UseRefHook />


      <div>
        <h2>Hooks allow:</h2>
        <ol>
          <li>Add State to Function Components</li>
          <li>Abstract Logic into Separate Functions</li>
        </ol>
      </div>

      <div>
        <p>Studying <b>{name}</b></p>
        <button 
          onClick={() => setName('node.js')}
        >Click to change</button>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <input 
          type={'checkbox'} 
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <p>{checked ? 'checked' : 'not checked'}</p>
      </div>

      <StarRating totalStars={10}/>

      <section>
        <em>api.github.com/users</em>
      </section>

      <div>
        <ul>
          {data.map((user) => <li>{user.login}</li>)}
        </ul>
        <button onClick = {() => setData([])}>Remove data</button>
      </div>

      <Refactoring />
    
    </div>
  );
}

export default App;
