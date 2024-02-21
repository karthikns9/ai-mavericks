import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState([]);

  const addMessageToChat = (message) => {
    setChatData((prevChatData) => [...prevChatData, message]);
  };

  return (
    <ChatContext.Provider value={{ chatData, addMessageToChat }}>
      {children}
    </ChatContext.Provider>
  );
};
