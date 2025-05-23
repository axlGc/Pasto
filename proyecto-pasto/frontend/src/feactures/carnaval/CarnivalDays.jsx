import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../assets/style/carnivalDays.css'; // Importa el nuevo archivo CSS
import Cards from '../../components/Cards.jsx'; 
import precarnImage from '../../assets/images/precarn.jpg';
import carnavalitoImage from '../../assets/images/carnavalito.jpg';
import colectivosImage from '../../assets/images/colectivos.jpg';
import castañedaImage from '../../assets/images/castañeda.jpg';
import eneroImage from '../../assets/images/5enero.jpg';
import enero6Image from '../../assets/images/6enero.jpg';
// Asegúrate de que la ruta sea correcta

function CarnivalDays() {
  const cardsData = [
    {
      image: precarnImage,
      title: 'PRE CARNAVAL',
      description:
        'Conciertos, Arco Iris en el asfalto, Carreras y recorridos, actividades en cada comuna de la ciudad forman parte de la agenda pre-carnaval.',
      link: '/listaeventos',
    },
    {
      image: carnavalitoImage,
      title: '2 DE ENERO',
      description:
        'Se celebra el carnavalito, el lugar para los niños dentro del carnaval, inician los tablados y festivales en plazas públicas.',
      link: '/listaeventos2',
    },
    {
      image: colectivosImage,
      title: '3 DE ENERO',
      description:
        'El espectacular desfile de colectivos coreográficos recuerda las travesías épicas en tributo a la madre tierra y el pasado ancestral andino.',
      link: '/listaeventos3',
    },
    {
      image: castañedaImage,
      title: '4 DE ENERO',
      description:
        'La llegada de la Familia Castañeda, un desfile tradicional con pasajes de identidad, hechos y personajes de la memoria rural y urbana de la región.',
      link: '/listaeventos4',
    },
    {
      image: eneroImage,
      title: '5 DE ENERO',
      description:
        'Juego de identidad, práctica lúdica que dio origen al juego de carnaval, es sentir la alegría al compartir el ritual de pintarse el rostro.',
      link: '/listaeventos5',
    },
    {
      image: enero6Image,
      title: '6 DE ENERO',
      description:
        'El Desfile Magno, un día apoteósico donde la creatividad se siente por toda la senda; disfraces, comparsas y carrozas emergen e inundan la ciudad.',
      link: '/listaeventos6',
    },
  ];

  return (
    <div className="container-fluid bg-light py-5">
     
      <div className="container">
        <h1 className="text-center  mb-4">DÍAS DE CARNAVAL</h1>
        <div className="row  row-cols-1 row-cols-md-3 g-4"  >
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CarnivalDays;