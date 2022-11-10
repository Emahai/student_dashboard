import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Assignment from './pages/Assignment';
import Course from './pages/Course';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/assignment' element={<Assignment />} />
        <Route path='/course' element={<Course />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

const Div = styled.div`
  position: relative;
  background-color: white;
`;
