import './App.css';
import {BrowserRouter,  Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Covid19 from './pages/Covid19';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="crypto" element={<Crypto/>}/>
        <Route path="services"  element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="covid19" element={<Covid19/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
