// RCE CSS
import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox } from 'react-chat-elements'
import { ChatItem } from 'react-chat-elements'
import { Input, Button, MessageList   } from 'react-chat-elements'



function ChatElement(props){

    const handleSend = (arg) => {
        // const userMessage = `User: ${newMessage}`;
        // const botMessage = props?.apiResponse
    
        // setMessages([...messages, userMessage, botMessage]);
        // props.onSend(newMessage);
        // setNewMessage('');
      };
    
    return(
        <div>
           <Input placeholder="Type here..." multiline={true}/>
           <Button text={"Send"} onClick={() => handleSend()} title="Send" />;
           <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={[
            {
            position:"left",
            type:"text",
            title:"Kursat",
            text:"Give me a message list example !",
            },
            {
            position:"left",
            type:"text",
            title:"Emre",
            text:"That's all.",
            },
            ]}/>
        </div>
       
      
//         <MessageBox
//   position={"left"}
//   type={"text"}
//   title={"Message Box Title"}
//   text="Here is a text type message box"
// />
    )
}

export default ChatElement;

