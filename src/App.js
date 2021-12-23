import './App.css';
import {Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer'

const {REACT_APP_BASE_URL, REACT_APP_API_KEY} = process.env;

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(`${REACT_APP_BASE_URL}/sets/?key=${REACT_APP_API_KEY}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }

 useEffect(() => {
   getData();
 }, [])

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path = '/' element={<Home data={data}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
