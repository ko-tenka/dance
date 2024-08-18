import { Carousel } from 'antd';
import './Slider.css';

export default function Slider() {
  return (
    <div className='container_carousel'>
      <div className='carousel'>
        <Carousel autoplay autoplaySpeed={5000}>
          <div className='slide'>
            <img className='photo' src="./man.jpg" alt="Красивая картинка" />
            <h3 className='text'>Приходи на бесплатное пробное занятие!</h3>
          </div>
          <div className='slide'>
            <h3 className='text'>Приведи друга</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
