import { Car, Motorcycle } from 'src/interfaces/types';
import { Button } from '@nextui-org/react'
import { PiHorse } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { GoGear } from "react-icons/go";
import Styles from '@stylesLanding/PopularItes.module.css'

type renderCar = {
  item: Car
}

type renderMotorcycles = {
  item: Motorcycle
}

function CardCar ({ item }: renderCar) {
  return (
    <div className={Styles.card}>
      <div className={Styles.containerImg}>

      </div>
      <p className={Styles.titleCard}>{item.brand} {item.model}</p>
      <div className={Styles.containerInfo}>
        <p className={Styles.itemInfo}>
          <PiHorse className={Styles.icon}/> 
          {item.power} hp
        </p>
        <p className={Styles.itemInfo}>
          <MdSpeed className={Styles.icon}/>
          {item.speedMax} Km/h
        </p>
        <p className={Styles.itemInfo}>
          <GoGear className={Styles.icon}/>
          {item.torque} Nm
        </p>
      </div>
      <Button type='button' color='primary' style={{backgroundColor: 'var(--primaryColor)', width: '95%', borderRadius: '4px'}}>Configurar</Button>
    </div>
  )
}

function CardMotorcycle ({item}: renderMotorcycles) {
  return (
    <div className={Styles.card}>
      <div className={Styles.containerImg}>

      </div>
      <p className={Styles.titleCard}>{item.brand} {item.model}</p>
      <div className={Styles.containerInfo}>
        <p className={Styles.itemInfo}>
          <PiHorse className={Styles.icon}/> 
          {item.cylinder} CC
        </p>
        <p className={Styles.itemInfo}>
          <MdSpeed className={Styles.icon}/>
          {item.speedMax} Km/h
        </p>
        <p className={Styles.itemInfo}>
          <GoGear className={Styles.icon}/>
          {item.power} CV
        </p>
      </div>
      <Button type='button' color='primary' style={{backgroundColor: 'var(--primaryColor)', width: '95%', borderRadius: '4px'}}>Configurar</Button>
    </div>
  )
}

type type = {
  type: string
  item: Array<Car | Motorcycle>
}

export function PopularItems ({ type, item }: type){
  if (type === 'Cars') {
    return (
      <section className={Styles.container}>
        <h1 style={{ fontSize: '1.5rem'}} >Popular Cars</h1>
        <div className={Styles.contentCards}>
          {
            item.map((car) => {
              return <CardCar item={car} key={car.model}/>
            })
          }
        </div>
      </section>
    )
  } else {
    return (
      <section className={Styles.container}>
        <h1 style={{ fontSize: '1.5rem'}}>Popular Motorcycles</h1>
        <div className={Styles.contentCards}>
          {
            item.map((motorcycle) => {
              return <CardMotorcycle item={motorcycle} key={motorcycle.model} />
            })
          }
        </div>
      </section>
    )
  }
}
