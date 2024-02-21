import React, { useState } from "react";
import './App.css'
import { ChatProvider } from "./ChatContext";
import Chat from "./Chat";

const App = () => {

  const [activeTab, setActiveTab] = useState('leadAssistance');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (

    <ChatProvider>
      <div className="App app-container">
      {/* <div className="tab-container">
        <div
          className={activeTab === 'leadScore' ? 'active' : ''}
         onClick={() => handleTabChange('leadScore')}
        >
          Lead Score
        </div>
        <div
          className={activeTab === 'leadAssistance' ? 'active' : ''}
          onClick={() => handleTabChange('leadAssistance')}
        >
          Lead Assistance Chat
        </div>
      </div> */}

      <div className="tacontentb-">
        {/* {activeTab === 'leadScore' && <LeadScore />}
        {activeTab === 'leadAssistance' && <ChatContainer />} */}
        <Chat/>
      </div>
    </div>
    </ChatProvider>
    
  );
};

export default App;
