import React from 'react'
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';

const ChatFeed =(props)=>{
    // console.log(props);
    const {chats,activeChat,userName,messages}=props;

    const chat = chats && chats[activeChat];
    console.log(chat,userName,messages);
    const handleSignout =()=>{
        localStorage.setItem("username" , '');
        localStorage.setItem("password" , '');
        window.location.reload();
    }

    const renderReadReceipts =(message , isMyMessage)=>{
       return chat.people.map((person,index)=> person.last_read === message.id &&(
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage? 'left': 'right',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />

            
        ))
    }

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
                    <div className="read-receipt" style={{marginRight: isMyMessage ? '18px' : '0px' , marginLeft: isMyMessage ? '0px' : '68px'}}>
                    {
                        renderReadReceipts(message,isMyMessage)
                    }
                    </div>
                </div>
            );
        })
    }

    renderMessages()

    if(!chat) return 'Loading......';
    return (
        <div className="chat-feed">
            <button className="signout" onClick={handleSignout}><i class="fas fa-sign-out-alt"></i></button>
            <div className="chat-title-container">
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