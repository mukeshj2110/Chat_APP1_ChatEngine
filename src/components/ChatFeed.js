import React from 'react'
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';

const ChatFeed =(props)=>{
    // console.log(props);
    const {chats,activeChat,userName,messages}=props;

    const chat = chats && chats[activeChat];
    console.log(chat,userName,messages);

    const renderMessages =()=>{
        const keys = Object.keys(messages);

        console.log(keys);
        return keys.map((key,index)=>{
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1]
            const isMyMessage = userName === message.sender.username
            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage?
                            <MyMessage  message={message}/>:
                            <TheirMessage message={message} lastMessageKey={lastMessageKey}/>

                        }
                    </div>
                    <div className="read-reciept" style={{marginRight: isMyMessage ? '18px' : '0px' , marginLeft: isMyMessage ? '0px' : '68px'}}>
                    read-reciept
                    </div>
                </div>
            );
        })
    }

    renderMessages()

    if(!chat) return 'Loading......';
    return (
        <div className="chat-feed">
            <div className="chat-title-conatiner">
                <div className="chat-title">
                    {chat.title}
                </div>
                <div className="chat-subtitle">
                    {
                        chat.people.map((person) =>`${person.person.username}`)
                    }
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}></div>
            <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );

   
}

export default ChatFeed;