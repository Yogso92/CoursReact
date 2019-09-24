import React from 'react';
import './App.css';
import Hello from './Components/Person'
import DateJour from './Components/DateJour';
import Chrono from './Components/Chrono';
import ResumerChrono from './Components/ResumerChrono';


class App extends React.Component {
  times = []
  constructor(props){
    super(props)
    this.state = {
      times: []
    }
    this.ajouterTemps = this.ajouterTemps.bind(this)
  }
  ajouterTemps(t){
    console.log(this)
    this.setState((s) => ({times: [...s.times, t] }), () => console.log(this.state.times))

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Hello name={'Jordane'} age = {27}></Hello>
          <DateJour />
          <Chrono ajouterTemps = {this.ajouterTemps}/>
          <ResumerChrono plusGrand = {false} times = {this.state.times} />
        </header>
      </div>
    );
  }
}

export default App;
