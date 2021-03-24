import React from 'react';
import './App.css';
import Keyboard from "./components/keyboard"

const coolSpaceBackground = "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80";

function App() {
  localStorage.clear();
  return (
    <div className="App"
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:`url(${coolSpaceBackground})`
      }}>
      <Keyboard />
    </div>
  );
}

export default App;
