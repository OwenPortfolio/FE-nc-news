import './App.css';

import {useState} from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import SingleTopic from './components/SingleTopic';
import Article from './components/Article';
import Error from './components/Error';

const error = <h1>404 Not Found</h1>

function App() {
  const[user, setUser] = useState('grumpy19');
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar user={user}/>
        <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/articles/topics/:topic' element={<SingleTopic/>}/>
            <Route path='/articles/:article' element={<Article user={user}/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
