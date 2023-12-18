import Glide from './glide';

import image1 from '../assets/img/caxer-fondo1.jpg';
import image2 from '../assets/img/caxer-fondo2.jpg';
import image3 from '../assets/img/caxer-soluciones.png';

const slides = [
  { image: image1, title: 'Soluciones de Impresión', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
  { image: image2, title: 'Soluciones de Administrativas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
  { image: image3, title: 'Soluciones Tecnológicas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
];

const Carrousel = () => {
  return (
    <div>
      <Glide slides={slides}/>
    </div>
  );
};

export default Carrousel;