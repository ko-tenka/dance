import React, { useEffect } from 'react';
import './navbarglav.css';
import { fetchUserInfo } from '../../redux/thunkActions';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

export default function Navbarglav() {
  const user = useAppSelector((store) => store.userSlice.user);
  console.log(user);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    void dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <div className='navConteiner'>
      <div className='spisok'>
        <a className='comp1' href='#teachers'>педагоги</a>
        <a className='comp1' href='#news'>новости</a>
        <a className='comp1' href='#contacts'>контакты</a>
      </div>
      <div className='navConteiner_phone'>
        <img className='menu' src="./menu.png" alt="меню" />
      </div>
    </div>
  );
}

