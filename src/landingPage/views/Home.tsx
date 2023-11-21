import { Header } from '@landingComponents/Header'
import Brands from '@assets/Brands.png'
import { Mouse } from '@landingComponents/Mouse'
import Styles from '@stylesLanding/Home.module.css'
import { Divider } from '@nextui-org/react'
import { PopularItems } from '@landingComponents/PopularItems'
import { Footer } from '@landingComponents/Footer'

export function HomePage () {
  return (  
    <main className={Styles.container}>
      <Header />
      <section className={Styles.containerMouse}>
        <Mouse />
        <Divider />
        <img src={Brands} width={650} />
      </section>
      <PopularItems type='Cars' />
      <PopularItems type='Motorcycles' />
      <Footer />
    </main>
  )
}