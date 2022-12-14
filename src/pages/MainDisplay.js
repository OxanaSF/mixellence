import React, { useContext } from 'react';

import Nav from '../ClientDisplay/components/Nav/Nav';
import Hero from '../ClientDisplay/components/Hero/Hero';
import BottomNav from '../ClientDisplay/components/BottomNav/BottomNav';
import AboutUs from '../ClientDisplay/components/About/About';
import Services from '../ClientDisplay/components/Services/Services';
import MeetOurTeem from '../ClientDisplay/components/MeetOurTeem/MeetOurTeem';
import SignatureDrink from '../ClientDisplay/components/SignatureDrink/SignatureDrink';
import SignatureDrinks from '../ClientDisplay/components/SignatureDrinks/SignatureDrinks'
import Gallery from '../ClientDisplay/components/Gallery/Gallery';
import Testimonials from '../ClientDisplay/components/Testimonials/Testimonials';
import Footer from '../ClientDisplay/components/Footer/Footer';
import Modal from '../ClientDisplay/components/Modal/Modal';

import ModalContext from '../context/modal-context';

const MainDisplay = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <main>
      <Nav />
      <Hero />
      {modalCtx.modalIsOpen && <Modal />}
      <BottomNav />
      <AboutUs />
      <Services />
      <MeetOurTeem />
      <SignatureDrinks />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default MainDisplay;