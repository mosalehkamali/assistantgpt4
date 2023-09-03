import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import HomeChat from './Components/Chat/HomeChat';
import Chat3Pro from './Components/Chat/ChatPage/Chat3Pro';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/HomeChat" element={<HomeChat />} />
          <Route path="/Chat3Pro" element={<Chat3Pro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
