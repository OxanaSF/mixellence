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
      });
      setTestimonials(list);
      setLoading(false);
    },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    }
  }, []);

  return (
    <Container>
      <Card.Group>
        <Grid columns={3} stackable>
          {testimonials && testimonials.map((item) => (
            <Grid.Column>
              <Card key={item.id}>
                <Card.Content>
                  <Image
                    src={item.img}
                    size="medium"
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%"
                    }} />
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}

        </Grid>
      </Card.Group>
    </Container>
  )
}
