import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { BARTENDERS } from '../../../data/bartenders';
import { onSnapshot, collection } from 'firebase/firestore';

import TeamDashboardSlider from './TeemDashboardSlider';
import BartenderDashboardCard from './BartenderDashboardCard';
// import './TeemDashboard.css';

function TeamDashboardDisplay(props) {
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
      <div>
        {bartenders &&
          bartenders.map((item) => (
            <BartenderDashboardCard
              id={item.id}
              key={item.id}
              img={item.img}
              alt={item.name}
              name={item.name}
              drink={item.drink}
              city={item.city}
              quote={item.quote}
            />
          ))}
      </div>
    </div>
  );
}

export default TeamDashboardDisplay;
