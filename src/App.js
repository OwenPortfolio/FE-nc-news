import './App.css';

import {useState} from 'react';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import SingleTopic from './components/SingleTopic'

function App() {
  const [currentPage, setCurrentPage] = useState('All');

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path='/articles/topics/:topic' element={<SingleTopic/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
