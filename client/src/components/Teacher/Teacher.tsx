import React from 'react'
import './Teacher.css'

export default function Teacher() {
  return (
    <div className='glav_conteiner'>
        <div className='oneTeacher'>
      <img className='photo' src="./Marina.JPG" alt="Фото руководителя" />
      <div className='opisanie'>
      <p className='zagolovok'>Руководитель клуба</p>
      <p className='text'> Закончила Кузбасский колледж культуры и искусств имени народного артиста СССР Иосифа Давыдовича Кобзона! <br/>
 Победительница всероссийский и международных конкурсов и фестивалей!   <br/>
Хореограф, педагог и основатель школы современного танца « Maze dance company» по направлению contemporary , modern, детский танец!  <br/>
Ученики школы являются победителями чемпионата «Scala Champ-Fest» в 2023 году!  <br/>
Обладатели многократных побед на всероссийских и международных конкурсах и фестивалей!</p>
</div>
    </div>
    {/* <img src="./line1.PNG" alt="линия" />
    <img src="./line2.PNG" alt="линия" /> */}
    <img className='line' src="./line3.PNG" alt="линия" />
    </div>
  )
}
