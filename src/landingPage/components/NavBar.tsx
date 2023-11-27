import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@contexts/User'
import { UserAvatar, UserToLogin } from '@landingComponents/User'
import { useLocation } from 'react-router-dom'
import Styles from '@stylesLanding/Nav.module.css'
import Proline from '@assets/logo.svg'
import { Link } from 'react-router-dom'

export function NavBar () {
  const userContextData = useContext(UserContext)
  const [userAuth, setAuth] = useState(false)
  const location = useLocation()
  console.log(location)
  useEffect(()=> {
    console.log(userContextData)
    userContextData?.token != "" ? setAuth(true) : setAuth(false)
  },[userContextData])
  return (
    <nav className={Styles.containerNavigator}>
      <section className={Styles.container}>
        <img src={Proline} width={120}/>
        <ul className={Styles.content}>
          <li>
            <Link style={location.pathname === "/" ? {color: 'var(--primaryColor)'} : {color: '#434343'}} to="/">Home</Link>
            </li>
          <li>
            <Link style={location.pathname === "/cars" ? {color: 'var(--primaryColor)'} : {color: '#434343'}} to="/cars">Cars</Link>
          </li>
          <li>
            <Link style={location.pathname === "/motorcycles" ? {color: 'var(--primaryColor)'} : {color: '#434343'}} to="/motorcycles">Motorcycles</Link>
          </li>
        </ul>
        {
          userAuth ? (<UserAvatar />) : (<UserToLogin />)
        }
      </section>
      <section className={Styles.containerLogo} >
        <img className={Styles.logo} src='https://firebasestorage.googleapis.com/v0/b/proline-de53e.appspot.com/o/Motorcycles%2FPanigale%2FDucati.png?alt=media&token=4e9c0eda-a7e2-4409-af86-6a1871cdd25f' />
      </section>
    </nav>
  )
}