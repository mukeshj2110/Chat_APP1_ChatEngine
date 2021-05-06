import './App.css';

import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

function App() {

  

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine 
      height="100vh"
      projectID="9eaddace-dc36-4824-8031-582618505ed1"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed ={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />

    
  );
}

export default App;
