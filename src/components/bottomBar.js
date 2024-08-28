import React, { useState } from 'react';
import './bottomBar.css'

const BottomBar = () => {
  const [selectedIcon, setSelectedIcon] = useState('home'); // 초기 선택 아이콘 설정

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };
  return (
   <div className="bottom-bar">
       <img
        src={selectedIcon === 'home' ? '/homeSelected.svg' : '/home.svg'}
        alt="Home"
        className="bottomBarIcon"
        onClick={() => handleIconClick('home')}
      />
      <img
        src={selectedIcon === 'board' ? '/boardSelected.svg' : '/board.svg'}
        alt="Board"
        className="bottomBarIcon"
        onClick={() => handleIconClick('board')}
      />
      <img
        src={selectedIcon === 'bowl-rice' ? '/bowl-riceSelected.svg' : '/bowl-rice.svg'}
        alt="Bowl Rice"
        className="bottomBarIcon"
        onClick={() => handleIconClick('bowl-rice')}
      />
      <img
        src={selectedIcon === 'message' ? '/messageSelected.svg' : '/message.svg'}
        alt="Message"
        className="bottomBarIcon"
        onClick={() => handleIconClick('message')}
      />
    </div>
  );
};

export default BottomBar;
