import { User } from '@landingComponents/User'
import Styles from '@stylesLanding/Nav.module.css'
import Proline from '@assets/logo.svg'

export function NavBar () {
  return (
    <nav className={Styles.container} >
      <img src={Proline} width={120}/>
      <ul className={Styles.content}>
        <li>Home</li>
        <li>Cars</li>
        <li>Motorcycles</li>
      </ul>
      <User />
    </nav>
  )
}