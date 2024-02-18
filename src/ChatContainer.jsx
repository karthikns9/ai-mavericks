import React, { useState } from 'react';
import Chat from './Chat';
import MermaidChart from './MermaidChart';

const ChatContainer = () => {
    console.log('chat container')
  const [apiResponse, setApiResponse] = useState(null);

  const handleSend = async (newMessage) => {
    console.log('new', newMessage);
    try {
      const response = await fetch('https://localhost:7207/WeatherForecast/processText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        const data = await response.text();
        setApiResponse(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="">
      <Chat onSend={handleSend} apiResponse = {apiResponse} />
      {/* {(apiResponse?.includes('flowhcart') || apiResponse?.includes('graph')) ? <MermaidChart apiResponse={apiResponse} /> : null} */}
    </div>
  );
};

export default ChatContainer;