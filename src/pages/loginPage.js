import React from 'react';
import './loginPage.css';

const LoginPage = () => {
    const handleClick= () => {
      const REST_API_KEY = 'YOUR_REST_API_KEY'; // 카카오에서 발급받은 REST API Key
      // const REDIRECT_URI = 'YOUR_REDIRECT_URI'; // 로그인 성공 후 리다이렉트할 찐 URI
      const REDIRECT_URI = 'http://localhost:3000/main'; // 리다이렉트할 로컬 URI
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      window.location.href = kakaoAuthUrl; // 카카오 로그인 페이지로 리다이렉트
    }
  return (
  <div className="login-container">
    <div className="login-text">KU:L MATE</div>
    <div className="login-subtext">타인이 우리가 되는 공간</div>
    <img
      src="/kakao_login_medium_wide.png"
      alt="login-logo"
      onClick={handleClick}
      className="login-logo"
    />
    {/* <button className="login-button">카카오로 시작하기</button> */}
    <img src="/logo.svg" alt="brand-logo" className="brand-logo" />
  </div>
  );
};

export default LoginPage;
