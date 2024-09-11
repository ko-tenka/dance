import React, { useEffect, useState } from 'react';
import './navbarglav.css';
import { fetchUserInfo } from '../../redux/thunkActions';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Color } from 'antd/es/color-picker';

export default function Navbarglav() {
  const user = useAppSelector((store) => store.userSlice.user);
  console.log(user);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    void dispatch(fetchUserInfo());
  }, [dispatch]);


  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handCloseClicked = () => {
    setIsImageClicked(false);
  }

  return (
    <div className='navConteiner'>
      <div className='spisok'>
        <a className='comp1' style={{ color: 'white' }} href='#teachers'>педагоги</a>
        <a className='comp1' style={{ color: 'white' }} href='#news'>новости</a>
        <a className='comp1' style={{ color: 'white' }} href='#contacts'>контакты</a>
      </div>
      <div className='navConteiner_phone'>
        {!isImageClicked ?(
          <img 
            className='menu' 
            src="./menu.png" 
            alt="меню" 
            onClick={handleImageClick}  
          />
        ):(
          <div className='spisok_phone'>
            <img className="close" 
              src="./close.png"
              alt="крестик" 
              onClick={handCloseClicked} />
            <a className='comp2' onClick={handCloseClicked} href='#teachers'>педагоги</a>
            <a className='comp2' onClick={handCloseClicked} href='#news'>новости</a>
            <a className='comp2' onClick={handCloseClicked} href='#contacts'>контакты</a>
          </div>
        )}
      </div>
    </div>
  );
}

