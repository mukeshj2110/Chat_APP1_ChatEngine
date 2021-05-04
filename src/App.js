import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="9eaddace-dc36-4824-8031-582618505ed1"
      userName="user1"
      userSecret="123"
      renderChatFeed ={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
