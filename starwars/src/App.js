import React, { useState, useEffect } from 'react';
import List from './components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

let [index, setIndex] = useState('1');
let [URL, setURL] = useState('https://swapi.co/api/people/?page='+index);
let axios = require('axios');
let [characters, setCharacters] = useState([]);



  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

let apiCall = () => {
    axios.get(URL).then(res => {
      console.log('secondary: ', res);
      setCharacters(res.data.results);
    }).catch(err => {
      console.log(err)
    });
}

useEffect(() => {
apiCall()
}, [URL])


  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <div className='Card-Container'>
        <button className="btn btn-primary" onClick={() => setIndex((parseInt(index)-1).toString(), setURL('https://swapi.co/api/people/?page='+index))} disabled={index == '1'}>Prev</button>
        <button className="btn btn-primary" onClick={() => setIndex((parseInt(index)+1).toString(), setURL('https://swapi.co/api/people/?page='+index))} disabled={index == '9'}>Next</button> 
        {
          characters.map(d => (<List key={d.name} data={d}/>))
        }
      </div>
    </div>
  );
}

export default App;
