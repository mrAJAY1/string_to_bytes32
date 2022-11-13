import "./App.scss";
import { AiOutlineCopy } from "react-icons/ai";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="inputContainer">
          <h1>Enter Your String</h1>
          <input type="text" placeholder="Enter your String here" />
        </div>
        <div className="outputContainer">
          <h1>
            bytes32 <AiOutlineCopy onClick={copyText} />
          </h1>
          <input type="text" disabled placeholder="bytes32 will appear here" />
        </div>
        <button>Convert</button>
      </div>
    </div>
  );
}

export default App;
