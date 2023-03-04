import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import beerImg from '../../assets/beers.png';
import randomBeerImg from '../../assets/random-beer.png';
import newBeerImg from '../../assets/new-beer.png';

const Home = () => {
  return (
    <div className='home'>
        <h1>Home</h1>
        <div className='home-links'>
          <img src={beerImg} alt=''/>
          <Link to='/beers'>All Beers</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quos deserunt reprehenderit enim fugiat consequuntur nulla quidem omnis nobis laudantium totam, impedit odit perferendis placeat esse velit, natus dolores ad.</p>
          <img src={randomBeerImg} alt=''/>
          <Link to='/beers/random-beer'>Get Random Beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur modi, aperiam animi cum ullam necessitatibus quos fugiat quis nobis placeat? Nobis architecto mollitia illum deserunt ipsam est veritatis tempora!</p>
          <img src={newBeerImg} alt=''/>
          <Link to='/new-beer'>Create New Beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat culpa enim nihil voluptate, recusandae optio expedita atque eos quos suscipit doloremque, repellendus earum eaque neque illum eius id tempora dolor?</p>
        </div>
    </div>
  )
}

export default Home