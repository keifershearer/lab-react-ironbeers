import React from 'react'
import { useState, useEffect } from 'react'

const RandomBeer = () => {
  const [beer, setBeer] = useState(null)
  useEffect(()=>{
  fetch('https://ih-beers-api2.herokuapp.com/beers/random')
  .then((rawResponse) => rawResponse.json())
  .then((response) => {
      setBeer(response)
      console.log(response);
  })
  .catch((e) => console.log(e))
  }, [])
  if (!beer){
      return 'loading'
  }
    return (
  
      <div className='beer-card'>
      <img src={beer.image_url} alt={beer.name}/>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
  
      </div>
  
    )
  }
export default RandomBeer