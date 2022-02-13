import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import MainLayout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<GamePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
