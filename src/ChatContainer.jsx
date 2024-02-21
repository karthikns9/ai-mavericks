import React from 'react';
import Chat from './Chat';
import { useChatContext } from './ChatContext';

const ChatContainer = () => {
  const { chatData, addMessageToChat } = useChatContext();

  const handleSend = async (newMessage) => {
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
       
        addMessageToChat(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className=""
    style={{height:"99%"}}>
      <Chat onSend={handleSend} apiResponse = {chatData} />
    </div>
  );
};

export default ChatContainer;