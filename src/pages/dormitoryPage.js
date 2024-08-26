import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './dormitoryPage.css';

const DormitoryPage = () => {
    const [imageSrc, setImageSrc] = useState('/dormitoryPic.svg'); // 초기 이미지 경로
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const imageRef = useRef(null);

    useEffect(() => {
        // 이미지 요소의 초기 크기를 설정
        if (imageRef.current) {
            setImageSize({
                width: imageRef.current.clientWidth,
                height: imageRef.current.clientHeight,
            });
        }
    }, []);
    const handleImageClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
  return (
    <div className="dormitory-container">
    <div className="dormitoryText">기숙사 인증하기</div>
    <div className="dormitorySubText">기숙자 합격증을<p />찍어주세요</div>
        <div className="dormitoryFileBox">
            <img 
                alt="dormitoryPic"
                 className="dormitoryPic" 
                 onClick={handleImageClick} 
                 src={imageSrc} 
                 style={{
                    objectFit: 'cover'        // 이미지를 유지하고 크기에 맞게 잘라냄
                }}
            />
            <input 
                id="fileInput" 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleFileChange} 
            />  
            </div>
    <img src="/logo.svg" alt="Image 2" className="BrandLogo" />
  </div>
  );
};

export default DormitoryPage;
