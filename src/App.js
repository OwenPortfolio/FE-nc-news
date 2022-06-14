import './App.css';

import {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Article from './components/Article'

function App() {
  const [currentPage, setCurrentPage] = useState('All');

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path='/articles/:article_id' element={<Article/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
