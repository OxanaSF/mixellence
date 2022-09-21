import margaritaImg from '../assets/images/SignatureDrink/desktop/image-margarita.jpg';
import palomaImg from '../assets/images/SignatureDrink/desktop/image-paloma.jpg';
import mojitoImg from '../assets/images/SignatureDrink/desktop/image-mojito.jpg';


const drinks = [
  {
    name: 'Margarita',
    id: Math.random(),
    date: 'some word-1',
    image: margaritaImg,
    description:
      'Made with the finest ingridents & our secret sauce',
  },
  {
    name: 'Paloma',
    id: Math.random(),
    date: 'some word-2',
    image: palomaImg,
    description:
      'Made with the finest ingridents & our secret sauce',
  },
  {
    name: 'Mojito',
    id: Math.random(),
    date: 'some worrd-3',
    image: mojitoImg,
    description:
      'Made with the finest ingridents & our secret sauce.',
  },
];

export default drinks;
