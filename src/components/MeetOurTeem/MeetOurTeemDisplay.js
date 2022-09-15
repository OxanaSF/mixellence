import React from 'react';

import MeetOurTeemSlider from './MeetOurTeemSlider';
import BartenderCard from './BartenderCard';
import './MeetOurTeemSlider.css';
import { BARTENDERS } from '../../data/bartenders';

function MeetOurTeemDisplay() {
  return (
    <div className="slider-container">
      <MeetOurTeemSlider>
        {BARTENDERS.map((item) => (
          <BartenderCard
            key={item.id}
            linkImg={item.linkImg}
            alt={item.name}
            name={item.name}
            drink={item.drink}
            city={item.city}
            quote={item.quote}
          />
        ))}
      </MeetOurTeemSlider>
    </div>
  );
}

export default MeetOurTeemDisplay;
