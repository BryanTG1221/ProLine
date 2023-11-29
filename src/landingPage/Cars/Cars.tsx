import { NavBarLanding } from '@landingPage/components/NavBar'
import { PopularItems } from '@landingPage/components/PopularItems'
import { useState, useEffect } from 'react'
import Styles from './Styles/car.module.css'
import { Footer } from '@landingPage/components/Footer'

export function CarsLanding () {
  const [cars, setCars] = useState([])

  async function GetData () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/vehicles')
    const data = await fetchingData.json()
    setCars(data)
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <section className={Styles.containerDetailLanding}>
      <NavBarLanding />
      <div style={{width:'85%', display: 'flex', justifyContent: 'center'}}>
        <PopularItems type='Cars' item={cars} />
      </div>
      <Footer />
    </section>
  )
}