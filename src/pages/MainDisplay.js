import React, { useContext} from 'react';

import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import BottomNav from '../components/BottomNav/BottomNav';
import AboutUs from '../components/About/About';
import Services from '../components/Services/Services';
import MeetOurTeem from '../components/MeetOurTeem/MeetOurTeem';
import SignatureDrink from '../components/SignatureDrink/SignatureDrink';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal'

import ModalContext from '../context/modal-context'; 

const MainDisplay = () => {

  const modalCtx = useContext(ModalContext); {/* Our Main Display receives the Context because it is not needed in the admin dashboard */}
  
  
  return (
    <main>
      <Nav />
      <Hero />
      {modalCtx.modalIsOpen && <Modal />}
      <BottomNav />
      <AboutUs />
      <Services />
      <MeetOurTeem />
      <SignatureDrink />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default MainDisplay;
