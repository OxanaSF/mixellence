import margaritaImg from '../assets/images/SignatureDrink/desktop/image-margarita.jpg';
import palomaImg from '../assets/images/SignatureDrink/desktop/image-paloma.jpg';
import mojitoImg from '../assets/images/SignatureDrink/desktop/image-mojito.jpg';


const drinks = [
  {
    name: 'Margarita',
    id: Math.random(),
    quote: 'Made with the finest ingridents & our secret sauce',
    image: margaritaImg,
    description:
      'Click',
  },
  {
    name: 'Paloma',
    id: Math.random(),
    quote: 'Made with the finest ingridents & our secret sauce',
    image: palomaImg,
    description: 'Click',
  },
  {
    name: 'Mojito',
    id: Math.random(),
    quote: 'Made with the finest ingridents & our secret sauce',
    image: mojitoImg,
  },
];


export default drinks;
