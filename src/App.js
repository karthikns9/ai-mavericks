import React from "react";
import ChatContainer from "./ChatContainer";
// import ReactStoreIndicator from 'react-score-indicator'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <ChatContainer />
      {/* <div className="score">
        <ReactStoreIndicator
            value={30}
            maxValue={100}/>
      </div> */}
    </div>
  );
};

export default App;
