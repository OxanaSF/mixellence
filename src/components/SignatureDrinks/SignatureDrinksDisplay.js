import React from 'react'
import { DRINKS_DATA } from '../../data2/drinks-data'
import SignatureDrinksCard from './SignatureDrinksCard'


const SignatureDrinksDisplay = () => {
  return (
    <div>
        { DRINKS_DATA.map((item) => (
            <SignatureDrinksCard 
            key={item.id}
            linkImg={item.linkImg}
            drinkName={item.drinkName}
            description={item.description}
            />
     
          
 ))}
    </div>

  )
}

export default SignatureDrinksDisplay