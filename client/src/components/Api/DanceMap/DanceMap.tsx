import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function DanceMap() {
    
  return (
    <YMaps query={{ apikey: '6178f558-f491-48db-ae1e-8d90a52d89a4'}}>
      <Map
        defaultState={{
          center: [55.76, 37.64],
          zoom: 9,
          controls: ['zoomControl'],
        }}
        width="100%"
        height="100%"
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >


          <>
            <Placemark
            

              // key={`point${camp.id}`}
              geometry={[55.873481, 37.317580]}
            
                       options={{
                         preset: 'islands#icon', // Внешний вид метки
                           iconColor: 'rgb(233, 71, 147)', // Цвет иконки метки
                        }}

            />

          </>
        

      </Map>
    </YMaps>
  );
}

