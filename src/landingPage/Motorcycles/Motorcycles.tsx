import { useEffect, useState } from 'react'
import { NavBarLanding } from '@landingComponents/NavBar'
import Styles from './styles/motorcycles.module.css'
import { PopularItems } from '@landingPage/components/PopularItems'
import { Footer } from '@landingPage/components/Footer'

export function MotorcyclesLanding () {
  const [motorcycles, setMotorcycles] = useState([])

  async function GetData () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/motorcycles')
    const data = await fetchingData.json()
    setMotorcycles(data)
  }

  useEffect(() => {
    GetData()
  }, [motorcycles])

  return (
    <section className={Styles.containerDetail}>
      <NavBarLanding />
      <div style={{width:'85%', display: 'flex', justifyContent: 'center'}}>
        <PopularItems item={motorcycles} type='motorcycles' />
      </div>
      <Footer />
    </section>
  )
}