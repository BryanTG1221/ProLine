import { NavBar } from '@landingComponents/NavBar'
import Styles from '@stylesLanding/Home.module.css'

export function HomePage () {
  return (
    <main className={Styles.container}>
      <section className={Styles.section}>
        <NavBar />
        <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="700" viewBox="0 0 1600 700" fill="none">
          <path d="M1290.72 75.9514H24C10.7452 75.9514 0 86.6965 0 99.9514V585.879C0 599.133 10.7452 609.879 24 609.879H117.211C130.466 609.879 141.211 620.624 141.211 633.879V676C141.211 689.255 151.956 700 165.211 700H187.888H1576C1589.25 700 1600 689.255 1600 676V24C1600 10.7452 1589.25 0 1576 0H1350.35C1339.96 0 1330.76 6.67676 1327.53 16.5463L1313.53 59.4051C1310.31 69.2747 1301.1 75.9514 1290.72 75.9514Z" fill="#2E2E2E"/>
        </svg>
      </section>
    </main>
  )
}