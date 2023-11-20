import { NavBar } from '@landingComponents/NavBar'
import { Button } from '@nextui-org/react'
import Styles from '@stylesLanding/Home.module.css'

export function HomePage () {
  return (  
    <main className={Styles.container}>
      <section className={Styles.section}>
        <NavBar />
        <div className={Styles.sectionInfo}>
          <section className={Styles.containerTexInfo}>
            <div className={Styles.containerInfo}>
              <p className={Styles.titleBrand}>Ducati</p>
              <p className={Styles.titleModel}>Panigale V4</p>
              <p className={Styles.descriptionText}>El nuevo Panigale V4 tiene una estética de carrera y es más fácil de pilotar, lo que hace que tanto los pilotos profesionales como los aficionados se sientan cómodos en su propia batalla personal contra el cronómetro.</p>
              <Button color="danger" type='button' style={{ width: 150, backgroundColor: '#FF3E3E', borderRadius: '8px', marginTop: '12px'}}>
                Configurar
              </Button>
            </div>
          </section>
          <section className={Styles.containerMotorcycle}>
            <img src='https://firebasestorage.googleapis.com/v0/b/proline-de53e.appspot.com/o/MotorcycleLanding.png?alt=media&token=4cc8e337-e52b-41d8-90ed-6322f44a6e32' />
          </section>
        </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1355" height="618" viewBox="0 0 1355 618" fill="none">
            <path d="M1089.87 67H24.5C11.2452 67 0.5 77.7452 0.5 91V514C0.5 527.255 11.2452 538 24.5 538H96C109.255 538 120 548.745 120 562V593.5C120 606.755 130.745 617.5 144 617.5H159.5H1330.5C1343.75 617.5 1354.5 606.755 1354.5 593.5V24C1354.5 10.7452 1343.75 0 1330.5 0H1146.13C1135.64 0 1126.36 6.81239 1123.23 16.8219L1112.77 50.1781C1109.64 60.1876 1100.36 67 1089.87 67Z" fill="#2E2E2E"/>
          </svg>
      </section>
    </main>
  )
}