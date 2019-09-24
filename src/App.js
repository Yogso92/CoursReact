import React from 'react';
import './App.css';
import Hello from './Components/Person'
import DateJour from './Components/DateJour';
import Chrono from './Components/Chrono';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name={'Jordane'} age = {27}></Hello>
        <DateJour />
        <Chrono/>
      </header>
    </div>
  );
}

export default App;
