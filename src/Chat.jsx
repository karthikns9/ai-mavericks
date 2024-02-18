import React, { useEffect, useState } from 'react';
import './Chat.css';
import MermaidChart from './MermaidChart';

const Chat = (props) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    'AI Mavericks: Hi there! How can I help you?'
  ]);

  useEffect(() => {
    console.log('chat compo')
    // You can optionally update the messages when the API response changes
    if(props?.apiResponse){
        setMessages((prevMessages) => [...prevMessages, `AI Mavericks: ${props?.apiResponse ?? '' }`]);
    }
  }, [props?.apiResponse]);

  const handleSend = () => {
    const userMessage = `User: ${newMessage}`;
    const botMessage = `AI Mavericks: ${'Processing...'}`; // You can update this when the actual bot response is received

    setMessages([...messages, userMessage, botMessage]);
    props.onSend(newMessage);
    setNewMessage('');
  };


  return (
    <div className="chat-container">
      <div className="chat-header">Lead Insights powered by AI.Mavericks</div>
      <div className="chat-messages">
        {messages?.map((message, index) => (
            
         ( (message?.includes('flowhcart') || message?.includes('graph')) ? 
            
         <>
            <div key={index} className="bot-message">Please refer the flow chart below.</div>
            <MermaidChart apiResponse={message.replace('AI Mavericks:', '')} />
         </> : 
          <div key={index} className={message.includes('AI Mavericks') ? 'bot-message' : 'user-message'}>
            {message}
          </div>)
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
