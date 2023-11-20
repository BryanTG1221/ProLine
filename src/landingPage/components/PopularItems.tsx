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

export function PopularItems (type) {
  if (type === 'Cars') {
    return (
      <section>
        <h3>Popular Items</h3>
        <div>
          <CardCar/>
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <h3>Popular Items</h3>
        <div>
          <CardMotorcycle />
        </div>
      </section>
    )
  }
}
