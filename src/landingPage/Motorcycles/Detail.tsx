import { Motorcycle } from "@interfaces/types"
import { NavBarLanding } from "@landingPage/components/NavBar"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Styles from './Styles/motorcycles.module.css'
import { Button } from "@nextui-org/react"

export function MotorcyclesDetail () {
  const { id } = useParams()
  const [motorcycle, setMotorcycle] = useState<Motorcycle>()

  
  useEffect(() => {
    async function getCarByID() {
      const fetchingData = await fetch(`http://127.0.0.1:5000/api/vehicles/${id}`)
      const response = await fetchingData.json()
      console.log(response)
      setMotorcycle(response)
    }

    getCarByID()

  }, [id])

  async function handleShop () {
    console.log("Generate shop")
    console.log(motorcycle)
    const fetchingData = await fetch('http://127.0.0.1:5000/api/sells/add', {
      method: 'POST',
      headers: { "content-type": "application/json"},
      body: JSON.stringify({ "product_id": motorcycle?.id, "brand": motorcycle?.brand, "model": motorcycle?.model, "year": motorcycle?.year, "price": motorcycle?.price})
    })
    const response = await fetchingData.json()
    console.log(response)
  }
  return (
    <main className={Styles.containerDetail}>
      <NavBarLanding />
      <div className={Styles.content}>
        <section className={Styles.sectionInfo}>
          <p className={Styles.brand}>{motorcycle?.brand}</p>
          <p className={Styles.model}>{motorcycle?.model}</p>
          <Button variant="shadow" style={{width: '200px'}} color="primary" onPress={handleShop}>Comprar</Button>
        </section>
      </div>
      <div className={Styles.gradientDiv}/>
      <img src={motorcycle?.urlImage} className={Styles['img-responsive']} />
    </main>
  )
}