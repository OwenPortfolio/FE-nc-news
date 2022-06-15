import './App.css';

import {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import SingleTopic from './components/SingleTopic'
import Article from './components/Article'

function App() {
  const[user, setUser] = useState('grumpy19');
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/articles/topics/:topic' element={<SingleTopic/>}/>
          <Route path='/articles/:article' element={<Article user={user}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
