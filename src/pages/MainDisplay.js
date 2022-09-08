import React from 'react'


import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import MeetOurTeem from '../components/MeetOurTeem/MeetOurTeem'
import SignatureDrinks from '../components/SignatureDrinks/SignatureDrinks'
import Gallery from '../components/Gallery/Gallery'
import Testimonials from '../components/Testimonials/Testimonials'

const MainDisplay = () => {
  return (
    <main>
        <Hero />
        <Services />
        <MeetOurTeem />
        <SignatureDrinks />
        <Gallery />
        <Testimonials />

    </main>
  )
}

export default MainDisplay