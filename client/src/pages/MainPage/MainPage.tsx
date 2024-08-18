import React from 'react'
import Form from '../../components/Form/Form'
import List from '../../components/List/List'
import DanceMap from '../../components/Api/DanceMap/DanceMap';
import './MainPage.css';
import Teacher from '../../components/Teacher/Teacher';
import Slider from '../../components/Slider/Slider';


export default function MainPage() {
  return (
    <div>
        <div className='glavnayaSFotoTXTDiv'>
          <img src="/pin.PNG" className="pin" alt="Тут есть знак" />
        <h1 className='glavnayaSFotoTXT1'>"Ритм в сердце, грация в движениях: танцуй свою историю с нами!"</h1>
        </div>
        <div className='glavnayaSFoto'>
          {/* <video className='back-video' autoPlay loop muted>
            <source src='/vid2.mp4' type='video/mp4'/>
            Your browser does not support the video tag. 
          </video> */}
        {/* <div/> */}

          
    </div>
    <div className='probClass'>
        <h2 className='probClassTxt1'>Школа танцев в Москве "Maze Dance Company"</h2>
        <h3 className='probClassTxt2'>Попробуй себя в танцах!</h3>
    </div>
    <Slider/>
    <div className='oStudii'>
      <h3 className='oStudiiTxt1'>"Maze Dance Company" - классный порект</h3>
      <h3 className='oStudiiTxt2'>Мы обучаем детей и взрослых современным направлениям танцев.</h3>
      <h3 className='oStudiiTxt3'>Наши педагоги и амбассадоры - яркие и самобытные представители современной танцевальной культуры</h3>
    </div>
    <div className='newScholl'>
      <h1 className='newSchollTxt1'>Новости студии</h1>
    </div>
      <Form/>
      <List/>
      <Teacher/>
      
      <div className='apiConteiner'>
    <div id="map" className='api'><DanceMap/></div>
      <h1 className='contant1'>Наши контакты</h1>
      <div className='contactConteiner'>
        <a href="https://t.me/mazedancecompany" className='contant2'>Telegramm</a>
        <a href="https://vk.com/mdcompany27" className='contant2'>VKontakte</a>
        <a href="https://www.instagram.com/maze.dance.company_?igsh=MXAydmNkd3M3c3lvcA==" className='contant2'>Instagramm</a>
    </div>
    </div>
    </div>
    
  )
}
