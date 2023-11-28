import { Car } from "@interfaces/types"
import { NavBarLanding } from "@landingPage/components/NavBar"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Styles from './Styles/car.module.css'
import { Button } from "@nextui-org/react"

export function CarDetail () {
  const { id } = useParams()
  const [car, setCar] = useState<Car>()

  
  useEffect(() => {
    async function getCarByID() {
      const fetchingData = await fetch(`http://127.0.0.1:5000/api/vehicles/${id}`)
      const response = await fetchingData.json()
      console.log(response)
      setCar(response)
    }

    getCarByID()

  }, [id])

  async function handleShop () {
    console.log("Generate shop")
    console.log(car)
    const fetchingData = await fetch('http://127.0.0.1:5000/api/sells/add', {
      method: 'POST',
      headers: { "content-type": "application/json"},
      body: JSON.stringify({ "product_id": car?.id, "brand": car?.brand, "model": car?.model, "year": car?.year, "price": car?.price})
    })
    const response = await fetchingData.json()
    console.log(response)
  }
  return (
    <main className={Styles.containerDetail}>
      <NavBarLanding />
      <div className={Styles.content}>
        <section className={Styles.sectionInfo}>
          <p className={Styles.brand}>{car?.brand}</p>
          <p className={Styles.model}>{car?.model}</p>
          <Button variant="shadow" style={{width: '200px'}} color="primary" onPress={handleShop}>Comprar</Button>
        </section>
      </div>
      <div className={Styles.gradientDiv}/>
      <img src={car?.urlImage} className={Styles['img-responsive']} />
    </main>
  )
}