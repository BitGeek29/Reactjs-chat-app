 import{ useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState("Demo user")
  return (
    <div>
      <h1>User: {name}</h1>
      <div className="chat-container">
        <div className="container me">
        <p className="chatbox">
          <strong>name:</strong>
          <span>chat message</span>
        </p> 
        </div>
        <div className="container">
        <p className="chatbox">
          <strong>name:</strong>
          <span>chat message</span>
        </p> 
      </div>
      </div>
      <div class="btm">
        <input type="text" placeholder="Enter you chat">

        </input>
        <button>Send</button>
      </div>
    </div>
  
  );
}

export default App;
