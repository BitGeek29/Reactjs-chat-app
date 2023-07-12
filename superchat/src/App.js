import {useState} from 'react'
import './App.css';

function App() {
  const[name,setName]= useState("dummyUser");
  return (
    <div>
      <h1>User: {name}</h1>
      <div className = "chat-container">
        <div className='container me'>
          <p className="chatbox">
           <strong>name: </strong>
           <span>Chat message</span>
           </p>
        </div>
        <div className='container'>
          <p className="chatbox">
           <strong>name: </strong>
           <span>Chat message</span> 
           </p>
        </div>

      </div>
      <div class='btm'>
        <input type="text" placeholder='enter your chat'>

        </input>
        <button>send</button>
      </div>
    </div>
  );
}

export default App;
