import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'


const BeerDetails = () => {
const params = useParams()
console.log(params)
const [beer, setBeer] = useState(null)
useEffect(()=>{
fetch('https://ih-beers-api2.herokuapp.com/beers/' + params.id)
.then((rawResponse) => rawResponse.json())
.then((response) => {
    setBeer(response)
    console.log(response);
})
.catch((e) => console.log(e))
}, [params.id])
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

export default BeerDetails