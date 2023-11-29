import { Car, Motorcycle } from 'src/interfaces/types';
import { Button } from '@nextui-org/react'
import { PiHorse } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { GoGear } from "react-icons/go";
import Styles from '@stylesLanding/PopularItes.module.css'
import { Link } from 'react-router-dom';

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
        <img src={item.urlImage} className={Styles.imgData} />
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
      <Link to={`/cars/${item.id}`} style={{width: '95%'}}>  
        <Button type='button' color='primary' style={{backgroundColor: 'var(--primaryColor)', width: '100%', borderRadius: '4px'}}>Configurar</Button>
      </Link>
    </div>
  )
}

function CardMotorcycle ({item}: renderMotorcycles) {
  return (
    <div className={Styles.card}>
      <div className={Styles.containerImg}>
        <img src={item.urlImage} className={Styles.imgData} />
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
      <Link to={`/motorcycles/${item.id}`} style={{width: '95%'}}>
        <Button type='button' color='primary' style={{backgroundColor: 'var(--primaryColor)', width: '100%', borderRadius: '4px'}}>Configurar</Button>
      </Link>
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

export function PopularItemsLanding ({ type, item }: type){
  const slicedItems = item.slice(0, 8); // Obtener los primeros 6 elementos

  if (type === 'Cars') {
    return (
      <section className={Styles.container}>
        <h1 style={{ fontSize: '1.5rem'}} >Popular Cars</h1>
        <div className={Styles.contentCards}>
          {
            slicedItems.map((car) => {
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
            slicedItems.map((motorcycle) => {
              return <CardMotorcycle item={motorcycle} key={motorcycle.model} />
            })
          }
        </div>
      </section>
    )
  }
}
