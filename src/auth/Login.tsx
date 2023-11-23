import { type FormEvent } from "react";
import LandingSide from '@assets/landingLogin.jpg'
import { Input, Checkbox, Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import logo from '@assets/logo.svg'
import logoWhiteZT from '@assets/ZTStudiosWhite.svg'
import Styles from './styles/Login.module.css'

export function Login () {
  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log("Hola hiciste cick")  
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const fetchingData = await fetch('http://127.0.0.1:5000/api/auth/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email,password})
    })
    const response = await fetchingData.json()
    console.log(response)
    
  }
  return (
    <main className={Styles.mainContainer}>
      <section className={Styles.container}>
        <form className={Styles.containerForm} onSubmit={handleSubmit}>
          <section style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}>
            <img src={logo} width={150}/>
          </section>
          <div style={{display: 'flex', flexDirection:'column', gap: '4px', lineHeight: '20px'}}>
            <p className={Styles.title}>Welcome back!</p>
            <p className={Styles.subTitle}>Login</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column',gap: '12px'}}>
            <section>
              <label className={Styles.labelText}>Email</label>
              <Input name="email" variant="bordered" radius="sm" key='email' type="email" labelPlacement="outside" placeholder="example@proline.com"  />
            </section>
            <section>
              <label className={Styles.labelText}>Password</label>
              <Input name="password" variant="bordered" radius="sm" key='email' type="password" labelPlacement="outside" placeholder="Enter you password"  />
            </section>
            <Checkbox classNames={{ icon: Styles.icon, label: Styles.labelCheck }} style={{fontSize: '10px'}} color="warning">Remind me</Checkbox>
          </div>
          <Button type="submit" style={{ backgroundColor: 'var(--primaryColor)', color: 'white', fontSize: '1rem', borderRadius: '8px'}} endContent={<FiArrowRight style={{fontSize: '1.2rem'}} />}>Iniciar Sesion</Button>
        </form>
      </section>
      <section className={Styles.landingSide}>
        <div className={Styles.contentImage}>
          <section className={Styles.imageSection}>
            <div className={Styles.filterImg} />
            <img src={LandingSide} className={Styles.image} />
          </section>
          <section className={Styles.infoSection}>
            <p className={Styles.infoTitle}>Who we are?</p>
            <p className={Styles.description}>In Proline, explore a vast array of vehicles, from luxurious motorcycles to dream cars. Our mission is to provide you with the utmost ease in acquiring the vehicle of your dreams.</p>
          </section>
          <div className={Styles.poweredBy}>
            <p>Powered by</p>
            <img src={logoWhiteZT}  />
          </div>
        </div>
      </section>
    </main>
  )
}