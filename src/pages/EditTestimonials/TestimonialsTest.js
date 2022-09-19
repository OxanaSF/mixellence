import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { Button, Card, Grid, Container, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"
import { collection, onSnapshot } from 'firebase/firestore';

export default function TestimonialsTest() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "testimonials"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })
    })
  }, []);

  return (
    <div>TestimonialsTest</div>
  )
}
