import { UserAvatar } from '@landingComponents/User'
import Styles from '@stylesLanding/Nav.module.css'
import Proline from '@assets/logo.svg'

export function NavBar () {
  return (
    <nav className={Styles.containerNavigator}>
      <section className={Styles.container}>
        <img src={Proline} width={120}/>
        <ul className={Styles.content}>
          <li>Home</li>
          <li>Cars</li>
          <li>Motorcycles</li>
        </ul>
        <UserAvatar />
      </section>
      <section className={Styles.containerLogo} >
        <img className={Styles.logo} src='https://firebasestorage.googleapis.com/v0/b/proline-de53e.appspot.com/o/Motorcycles%2FPanigale%2FDucati.png?alt=media&token=4e9c0eda-a7e2-4409-af86-6a1871cdd25f' />
      </section>
    </nav>
  )
}