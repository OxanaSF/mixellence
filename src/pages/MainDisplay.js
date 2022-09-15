import React from 'react';

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

const MainDisplay = () => {
  return (
    <main>
      <Nav />
      <Hero />
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
