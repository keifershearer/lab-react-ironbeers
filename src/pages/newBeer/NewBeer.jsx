import React, {useState} from 'react'
import axios from 'axios'
import './newBeer.css'


const NewBeer = () => {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [tips, setTips] = useState('')
  const [attenuation, setAttenuation] = useState(0)
  const [contributed, setContributed] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewer_tips: tips,
      attenuation_level: attenuation,
      contributed_by: contributed,
    }
    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        newBeer
      )
    }catch(error){
      console.log(error)
    }
  }


  return (
   <form onSubmit={handleSubmit}> 
      <div className='new-beer-form'>
        <label htmlFor="name">Name:</label>
        <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type='text'
        name='name'
        />
        <label htmlFor="tagline">Tagline:</label>
        <input
        onChange={(event) => setTagline(event.target.value)}
        value={tagline}
        type='text'
        name='tagline'
        />
        <label htmlFor="description">Description:</label>
        <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        type='text'
        name='description'
        />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input
        onChange={(event) => setFirstBrewed(event.target.value)}
        value={firstBrewed}
        type='text'
        name='firstBrewed'
        />
        <label htmlFor="tips">Brewer Tips:</label>
        <input
        onChange={(event) => setTips(event.target.value)}
        value={tips}
        type='text'
        name='tips'
        />
        <label htmlFor="attenuation">Attenuation Level:</label>
        <input
        onChange={(event) => setAttenuation(event.target.value)}
        value={attenuation}
        type='text'
        name='attenuation'
        />
        <label htmlFor="contributed">Contributed By:</label>
        <input
        onChange={(event) => setContributed(event.target.value)}
        value={contributed}
        type='text'
        name='contributed'
        />

      </div>
      <button>Create Beer</button>
    </form>
  )
}

export default NewBeer