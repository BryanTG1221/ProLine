import LogoProline from '@assets/logoGrey.svg'
import LogoZT from '@assets/logoZTGrey.svg'
import { Divider } from '@nextui-org/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Styles from '@stylesLanding/Footer.module.css'

export function Footer () {
  return (
    <footer className={Styles.container}>
      <img src={LogoProline} />
      <Divider style={{width: '50%'}}/>
      <section className={Styles.socialMedia}>
        <FaGithub />
        <FaLinkedin />
      </section>
      <section className={Styles.containerPowered}>
        <p className={Styles.text}>Powered by:</p>
        <img src={LogoZT} />
        <p className={Styles.text}>ZT Studios</p>
      </section>
    </footer>
  )
}