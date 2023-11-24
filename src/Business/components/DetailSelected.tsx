import { Button } from '@nextui-org/react'
import { Car, Motorcycle } from '@interfaces/types'
import Styles from '@business/Cars/styles/detail.module.css'

type props = {
  item: Car | Motorcycle | undefined
}

function ContentCar ({item} :props) {
  return (
    <>
      <section className={Styles.containerImage}>
        <p>logo</p>
        <div>
          <p>{item?.year}</p>
          <p>Image</p>
        </div>
      </section>
      <section className={Styles.containerInfo}>
        <p>{`${item?.brand} ${item?.model}`}</p>
        <div>
          <p>InfoCards</p>
        </div>
      </section>
      <Button color='warning' style={{color: 'white', backgroundColor:'var(--primaryColor)'}} className={Styles.btnEditar}>Editar</Button>
    </>
  )
}

export function DetailSelected ({ item }: props) {
    return (
      <main className={Styles.container}>
        <header className={Styles.containerTitle}>
        <p>Selected</p>
      </header>
        <ContentCar item={item} />
      </main>
    )
}