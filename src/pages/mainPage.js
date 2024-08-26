import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './mainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');

      if (authorizationCode) {
          console.log('Kakao authorization code:', authorizationCode);
          // 서버 연결 시 이 코드를 이용해 토큰을 받아올 수 있음
      } else {
          console.log('No authorization code found.');
      }
  }, []);



  return (
    <div className="container">
      <div className="text">Text</div>
      <div className="text2">Text2</div>
      <div className="login-section">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <button className="login-button">Login</button>
      </div>
      <img src="/image2.svg" alt="Image 2" className="image2" />
    </div>
  );
};

export default MainPage;
