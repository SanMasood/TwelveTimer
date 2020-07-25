import React from 'react';
import Hello from './Hello';
import TwelveTimer from './TwelveTimer';
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Hello name="Sana" name2="Ali" />*/}
        <TwelveTimer />
        </header>   
        
       
     
    </div>
  );
}

export default App;
