import React, {useState, useRef, useEffect } from 'react';
import './Chat.css';
import MermaidChart from './MermaidChart';
import { useChatContext } from './ChatContext';
import LeadScore from './LeadScore';
import { MdSend } from "react-icons/md";
import { MessageBox, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css"
import typing from './typing3.gif'
import integrateLogo from './integrate-mark.svg'
import { BsSend } from "react-icons/bs";


const Chat = (props) => {
  const [newMessage, setNewMessage] = useState('');
  const { chatData, addMessageToChat } = useChatContext();
  const chatContainerRef = useRef(null);
  const [loading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatData]);
 
  const handleSend1 = async () => {
    const userMessage = `${newMessage}`;
    addMessageToChat(userMessage);
    setNewMessage('');
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/WeatherForecast/processText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        const data = await response.text();
        addMessageToChat(data);
        setIsLoading(false)
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

const renderData = (chatData) =>{
  return chatData?.map((message, index) => {
    return rederElement(message, index);
  })
}

const rederElement = (message , index) => {
  // if(message?.includes('flowchart') || message?.includes('graph')){
    if(message?.includes('          ')){
    return(
      <React.Fragment>
          <MermaidChart apiResponse={message.replace('AI Mavericks:', '')} /> 
        </React.Fragment>
    )
  }
  else if(message?.includes('Score')){
    return(
      <React.Fragment>
      <LeadScore scoreMessage={message} />
      </React.Fragment>
    )
  }
  else if(message?.includes('AI Mavericks')){
    return (
      <div key={index} >
          {/* <p className="bot-message">{message.replace('AI Mavericks:', '')}</p> */}
          <MessageBox
          position='left'
          title='AI Mavericks'
          type='text'
          text={message.replace('AI Mavericks:', '')}
          date={new Date()}
          replyButton={true}
        />

    </div>
    )
  }
  else{
    return (
      <div key={index}>
        {/* <p className='user-message' style={{float:'right'}}>{message}</p> */}
        <MessageBox
          position='right'
          title=''
          type='text'
          text={message}
          date={new Date()}
          replyButton={true}
        />
      </div>
    )
  }
}

  return (
    <div className="chat-container" ref={chatContainerRef}>
      <div className="chat-header">
      <img class="integrate" alt="Integrate logo" src={integrateLogo}/>
        <p className='chat-heading'>Lead Insights powered by AI.Mavericks</p>
        </div>
      <div className="chat-messages">
      <div className=''>
      <MessageBox
          position='left'
          title='AI Mavericks'
          type='text'
          text="Hi there! How can I help you?"
          date={new Date()}
          replyButton={true}
          
        />
        {/* <img className='typing' src={typing} alt="loading..." /> */}
      </div>
      {renderData(chatData)}
      {loading ? 
      <div>
        <img className='typing' src={typing} alt="loading..." />
      </div>
       : null}
       <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevent the default behavior of the Enter key
              handleSend1();
            }
          }}
        />
        <div onClick={handleSend1} className='send'>
        {/* <MdSend /> */}
        <BsSend />
        </div>
      </div>
    </div>
  );
};

export default Chat;
