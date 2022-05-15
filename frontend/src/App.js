import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import ChatsPage from './Pages/ChatsPage';
function App() {
  return (
    <div className="App">
    <Route path="/" component={HomePage} exact/>
    <Route path="/chats" component={ChatsPage}/>
    </div>
  );
}

export default App;
