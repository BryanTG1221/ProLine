import { Button } from '@nextui-org/react'
import { PiHorse } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { GoGear } from "react-icons/go";
import Styles from '@stylesLanding/PopularItes.module.css'
import { Car, Motorcycle } from 'src/interfaces/types';


function CardCar (vehicle: Car) {
  return (
    <div className={Styles.card}>
      <div className={Styles.containerImg}>

      </div>
      <p className={Styles.titleCard}>Mercedes</p>
      <div className={Styles.containerInfo}>
        <p className={Styles.itemInfo}>
          <PiHorse className={Styles.icon}/> 
          {vehicle.power} hp
        </p>
        <p className={Styles.itemInfo}>
          <MdSpeed className={Styles.icon}/>
          {vehicle.speedMax} Km/h
        </p>
        <p className={Styles.itemInfo}>
          <GoGear className={Styles.icon}/>
          {vehicle.torque} Nm
        </p>
      </div>
      <Button type='button' color='primary' style={{backgroundColor: 'var(--primaryColor)', width: '95%', borderRadius: '4px'}}>Configurar</Button>
    </div>
  )
}

function CardMotorcycle (Moto: Motorcycle) {
  return (
    <div className={Styles.card}>
      <div className={Styles.containerImg}>

      </div>
      <p className={Styles.titleCard}>Mercedes</p>
      <div className={Styles.containerInfo}>
        <p className={Styles.itemInfo}>
          <PiHorse className={Styles.icon}/> 
          {Moto.cylinder} CC
        </p>
        <p className={Styles.itemInfo}>
          <MdSpeed className={Styles.icon}/>
          {Moto.speedMax} Km/h
        </p>
        <p className={Styles.itemInfo}>
          <GoGear className={Styles.icon}/>
          {Moto.power} CV
        </p>
      </div>
      <Button type='button' color='primary' style={{backgroundColor: 'var(--primaryColor)', width: '95%', borderRadius: '4px'}}>Configurar</Button>
    </div>
  )
}

type type = {
  type: string
}

export function PopularItems ({ type }: type){
  if (type === 'Cars') {
    return (
      <section className={Styles.container}>
        <h1 style={{ fontSize: '1.5rem'}} >Popular Cars</h1>
        <div>
          <CardCar />
        </div>
      </section>
    )
  } else {
    return (
      <section className={Styles.container}>
        <h1 style={{ fontSize: '1.5rem'}}>Popular Motorcycles</h1>
        <div className={Styles.contentCards}>
          <CardMotorcycle />
          <CardMotorcycle />
          <CardMotorcycle />
          <CardMotorcycle />
        </div>
      </section>
    )
  }
}
