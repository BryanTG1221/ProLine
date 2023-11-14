import Styles from '@stylesLanding/Nav.module.css'

export function NavBar () {
  return (
    <nav className={Styles.container} >
      <p>Logo</p>
      <ul className={Styles.content}>
        <li>Home</li>
        <li>Cars</li>
        <li>Motorcycles</li>
      </ul>
      <p>User</p>
    </nav>
  )
}