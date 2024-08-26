import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import DormitoryPage from './pages/dormitoryPage';

import Header from './components/Header';
import BottomBar from './components/bottomBar';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* 로그인 페이지 */}
        <Route 
            path="/" 
            element={<LoginPage />} 
          />
           {/* 메인페이지 */}
          <Route 
            path="/main" 
            element={
              <>
                <Header />
                <MainPage />
                <BottomBar />
              </>
            } 
          />
          {/* 기숙사인증페이지 */}
          <Route 
            path="/dormitoryCheck" 
            element={
              <>
                <DormitoryPage />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
