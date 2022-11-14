import Home from '../components/pages/Home';
import About from '../components/pages/About';
import NoPage from '../components/pages/NoPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home />}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<NoPage />}/>
    </Routes>
</BrowserRouter>
  );
}


export default App;
