import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path = '/' element={<Home text={'hello, world'}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
