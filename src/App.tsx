import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from "./components/keyboard"

function App() {
  return (
    <div className="App"
    style={{
          display:'flex',
          width:'100vw',
          height:'100vh',
          alignItems:'center',
          justifyContent:'center'
              }}>
      <Keyboard/>
    </div>
  );
}

export default App;
