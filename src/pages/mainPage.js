import React, { useEffect, useState } from 'react';
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
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      const value = event.target.value;
      const maxLength = 9;
  
      // 한글 자모 분리 포함된 글자 수 계산
      const length = Array.from(value.normalize('NFC')).length;
  
      if (length <= maxLength) {
        setInputValue(value);
      } else {
        // 초과하는 부분을 잘라내기
        const truncatedValue = Array.from(value.normalize('NFC')).slice(0, maxLength).join('');
        setInputValue(truncatedValue);
      }
    };

    const [selectedCategory, setSelectedCategory] = useState('기숙사');
    const [selectedTab, setSelectedTab] = useState('학사');
  
    const categories = ['기숙사', '대학교'];
    const tabs = ['학사', '장학', '일반', '산학', '학생'];
    const posts = [
      { id: 1, type: 'image1', text: '2학기 등록일정 안내' },
      { id: 2, type: 'image1', text: '2학기 수강바구니(수강신청) 방법 및 일정 안내' },
      { id: 3, type: 'image1', text: '2학기 건국대학교 학점교류 안내' },
      { id: 4, type: 'image2', text: '8월 136회 학위수여식 관련 졸업가운 여...'},
      { id: 5, type: 'image2', text: '2학기 다·부·연계·융합전공 선발자 안내' }
    ];
    const posts2 = [
      { id: 1, type: 'image1', text: '레이크홀 1302호분 이글 꼭 봐주세요~!',number: '5' },
      { id: 2, type: 'image1', text: '전기프 들으시는 컴공 찾아요~~' ,number: '7'},
      { id: 3, type: 'image1', text: '이제 종강할 때 된거 같으면 개추눌러볼까?',number: '13' },
      { id: 4, type: 'image2', text: '미안하다이거보여주려고어그로끌었다차리서학점...',number: '13'},
      { id: 5, type: 'image2', text: '도서관 5시에 문닫음??이거 나만몰랐음??',number: '3' }
    ];

  const [visiblePosts1, setVisiblePosts1] = useState(posts.length);
  const [visiblePosts2, setVisiblePosts2] = useState(posts.length);

  useEffect(() => {
    const updateVisiblePosts = () => {
      const boardHeight1 = document.querySelector('.bbs-board').offsetHeight;
      const boardHeight2 = document.querySelector('.free-board').offsetHeight;
      const postHeight = 24; // 각 게시글의 예상 높이 (픽셀 단위)
      // const maxVisiblePosts1 = Math.floor(boardHeight1 / postHeight);
      // const maxVisiblePosts2 = Math.floor(boardHeight2 / postHeight);
      const maxVisiblePosts1 = Math.floor((boardHeight1 -50) / postHeight); // 상단 패딩 고려
      const maxVisiblePosts2 = Math.floor((boardHeight2 - 20) / postHeight);
      setVisiblePosts1(Math.max(1, maxVisiblePosts1)); // 최소 1개의 게시글은 표시
      setVisiblePosts2(Math.max(1, maxVisiblePosts2)); 

    };
    updateVisiblePosts(); // 초기 로드 시 호출


    window.addEventListener('resize', updateVisiblePosts); // 창 크기 변경 시 호출
    return () => window.removeEventListener('resize', updateVisiblePosts);
  }, []);

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   // 창 크기 변경에 따라 windowWidth를 업데이트
   useEffect(() => {
     // 창 크기가 변경될 때 실행될 함수
     const handleResize = () => setWindowWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
 
   // 텍스트를 창 크기에 따라 잘라내는 함수
   const truncateText = (text) => {
     let maxLength;
     
     // 창 크기에 따른 최대 글자 수 설정
     if (windowWidth > 1200) {
       maxLength = 50;  
     } else if (windowWidth > 800) {
       maxLength = 30;  
     } else {
       maxLength = 20;  
     }
 
     // 글자가 maxLength를 초과하면 '...'으로 자름
     return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
   };
  return (
    <div className="mainPage-container">
      <div className="mainPageHeader">
        <div className="search-form">
        <img className="mainPagelogo" src="/logo.svg" alt="Logo"  />
          <form>
            <input className="searchInput" 
                   type="text" 
                   placeholder="내용을 입력해주세요" 
                   value={inputValue}
                   onChange={handleChange}/>
          </form>
          <img className="searchButton" alt="search" src="/mainPageSearchBtn.svg"/>
        </div>
        <div className="user-info">
          <div className="userDetails">
            <img className="profileImg" src="/mainpageProfile.svg" alt="Profile"  />
            <div className="userText">
              <div className="userName">익명</div>
              <div className="userAddress">레이크홀 507호</div>
            </div>
          </div>
          <div className="deliveryStatus">
            <div className="deliveryInfo">배달 현황: 배달중 1 외 1건</div>
            <div className="reviewPrompt">기숙사 리뷰를 해주세요!</div>
          </div>
        </div>
    </div>
    <div className="hungry-button">
          <div className="hungryHeader">
            <span className="hungryHeaderTitle">지금 배고프신가요?</span>
            <span className="hungryHeaderSubTitle">배달메이트 찾으러 가기</span>
          </div>
          <div className="hungryDescription">
            피자, 치킨, 떡볶이 등 메이트와 같이 배달시켜보세요!
            <div className="hungryDeliveryIcons">
              <img  className="hungryDeliveryIcon1" src="/delivery1.svg" alt="Delivery 1" />
              <img className="hungryDeliveryIcon2" src="/delivery2.svg" alt="Delivery 2"  />
              <img className="hungryDeliveryIcon3" src="/delivery3.svg" alt="Delivery 3"  />
            </div>
          </div>
      </div>
      <div className="bbs-board">
        <div className="categoryTabs">
        {categories.map((category, index) => (
            <div
              key={category}
              // CSS에서 categoryTab1 왼쪽위, categoryTab2는 오른쪽위가 둥글어야함. 이에 React에서 변수명 분리함.
              className={`categoryTab ${index === 0 ? 'categoryTab1' : index === 1 ? 'categoryTab2' : ''} ${selectedCategory === category ? 'Active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
        <img
          src={
            index === 0
              ? selectedCategory === category
                ? '/Selecteddormitory.svg'
                : '/dormitory.svg'
              : selectedCategory === category
              ? '/Selecteduniv.svg'
              : '/univ.svg'
          }
          alt={category}
          className="categoryIcon"
        />  
              {category}
            </div>
          ))}
        </div>
        <div className="subTabs">
          {tabs.map(tab => (
            <div
              key={tab}
              className={`subTab ${selectedTab === tab ? 'Active' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="posts">
        {posts.slice(0, visiblePosts1).map((post) => (
            <div key={post.id} className="post">
              <img
                src={post.id <= 3 ? '/Hicon.svg' : '/Nicon.svg'}
                alt="icon"
                className="postIcon"
              />
              {/* <span className="postText">{post.text}</span> */}
              <span className="postText">{truncateText(post.text)}</span>
              </div>
          ))}
        </div>
        {/* 서버연결시 게시글 보여주는건 아래코드로 ㄱㄱ 
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post">
              <img src={`/${post.type}.svg`} alt="icon" className="post-icon" />
              <span className="post-text">{post.text}</span>
            </div>
          ))}
        </div>
        */}
    </div> 
    <div className="free-board">
      <div className="freeBoardHeader">자유게시판 &gt; </div>
      <div className="posts2">
      {posts2.slice(0, visiblePosts2).map((post) => (
          <div key={post.id} className="post">
            <div className="postLeft">
              <img
                src={post.id <= 3 ? '/Hicon.svg' : '/Nicon.svg'}
                alt="icon"
                className="postIcon"
              />
              <span className="postText">{truncateText(post.text)}</span>
            </div>
            <span className="postNumber">{post.number}</span>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default MainPage;
