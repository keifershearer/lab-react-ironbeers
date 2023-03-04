import React from 'react'
import { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'


const Beers = () => {
  const [beers, setBeers] = useState(null)

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setBeers(response)
        console.log(response)
      })
      .catch((e) => console.error(e))
  }, [])

  console.log('Beers state: ', beers)

  if (!beers) {
    return <div className="Loading" style={{marginTop:100}}>Loading...</div>
  }
  return (
    <div>
      {beers.map((e)=>{
        return(
          <div className='beer-card'>
          <img src={e.image_url} alt={e.name}/>
          <Link to={'/beers/' +e._id}><h1>{e.name}</h1></Link>
          <h2>{e.tagline}</h2>
          <p>{e.contributed_by}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Beers