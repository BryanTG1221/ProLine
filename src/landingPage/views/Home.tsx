import { Header } from '@landingComponents/Header'
import Brands from '@assets/Brands.png'
import { Mouse } from '@landingComponents/Mouse'
import Styles from '@stylesLanding/Home.module.css'
import { Divider } from '@nextui-org/react'
import { PopularItemsLanding } from '@landingComponents/PopularItems'
import { Footer } from '@landingComponents/Footer'
import { useEffect, useState } from 'react'

export function HomePage () {
  const [cars, setCars] = useState([])
  const [motorcycle, setMotorcycle] = useState([])
  async function GetData () {
    const fetchingData = await fetch('http://127.0.0.1:5000/api/vehicles')
    const data = await fetchingData.json()
    setCars(data)
    const fetchingDataM = await fetch('http://127.0.0.1:5000/api/motorcycles')
    const dataM = await fetchingDataM.json()
    setMotorcycle(dataM)
  }

  useEffect(() => {
    GetData()
  }, [])
  return (  
    <main className={Styles.container}>
      <Header />
      <section className={Styles.containerMouse}>
        <Mouse />
        <Divider />
        <img src={Brands} width={650} />
      </section>
      <div style={{width: '85%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
        <PopularItemsLanding type='Cars' item={cars} />
        <PopularItemsLanding type='Motorcycles' item={motorcycle} />
      </div>
      <Footer />
    </main>
  )
}