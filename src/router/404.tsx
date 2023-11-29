import { NavBarLanding } from '@landingComponents/NavBar'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import Styles from '@stylesLanding/errors.module.css'
export function ErrorPage () {
  return (
    <main className={Styles.container}>
      <NavBarLanding />
      <section className={Styles.containerInfo}>
        <div className={Styles.containerTitle}>
          <p className={Styles.titleBack}>Oooops!</p>
          <p className={Styles.title}>Oooops!</p>
        </div>
        <p className={Styles.subtitle}>You are lost, the content of this page is no available or not exists.</p>
        <div style={{paddingLeft: '24px'}}>
          <Link to="/">
            <Button color='primary' variant='shadow' style={{backgroundColor: 'var(--primaryColor)'}} >Go Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}