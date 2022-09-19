import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

import MeetOurTeemSlider from './MeetOurTeemSlider';
import BartenderCard from './BartenderCard';
import './MeetOurTeemSlider.css';
import { BARTENDERS } from '../../data/bartenders';

function MeetOurTeemDisplay(props) {
  const [bartenders, setBartenders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, 'bartenders'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          console.log('doc.id', doc.id);
          list.push({ id: doc.id, ...doc.data() });
        });
        setBartenders(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="slider-container">
      <MeetOurTeemSlider>
        {bartenders &&
          bartenders.map((item) => (
            <BartenderCard
              id={item.id}
              key={item.id}
              img={item.img}
              alt={item.name}
              name={item.name}
              drink={item.drink}
              city={item.city}
              quote={item.quote}

              deleteBartender={props.deleteBartender}
      setDeketeBartender={props.setDeketeBartender}
            />
          ))}
      </MeetOurTeemSlider>
    </div>
  );
}

export default MeetOurTeemDisplay;
