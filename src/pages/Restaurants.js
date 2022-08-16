import { useState, useEffect } from 'react'

import './../assets/styles.css'
import SingleRestaurant from '../components/SingleRestaurant'

const Restaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch('https://bocacode-intranet-api.web.app/restaurants')
        .then(raw => raw.json())
        .then(data => setAllRestaurants(data))
        .catch(err => console.error(err))
    }

    getData()
  }, [])

  return (
    <div className='container'>
      <h1>Jons Restaurants</h1>
      {/* <button onClick={() => getData()}>Get restaurants</button> */}
      {allRestaurants.map(single => {
        // console.log(single)
        // return <SingleRestaurant key={single.id} name={single.name} address={single.address} photoUrl={single.photoUrl} />
        return <SingleRestaurant key={single.id} restaurant={single} />
      })}
    </div>
  )
}

export default Restaurants
