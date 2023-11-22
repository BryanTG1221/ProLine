import { Input, Checkbox, Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import Styles from './styles/Login.module.css'

export function Login () {
  return (
    <main>
      <section className={Styles.container}>
        <form className={Styles.containerForm}>
          <div style={{display: 'flex', flexDirection:'column', gap: '4px', lineHeight: '20px'}}>
            <p className={Styles.title}>Bienvenido de vuelta!</p>
            <p className={Styles.subTitle}>Iniciar Sesion</p>
          </div>
          <Input variant="bordered" radius="sm" key='email' type="email" label="Email" labelPlacement="outside" placeholder="example@proline.com"  />
          <Input variant="bordered" radius="sm" key='email' type="password" label="Password" labelPlacement="outside" placeholder="Enter you password"  />
          <Checkbox classNames={{ wrapper: Styles.icon, label: Styles.labelCheck }} color="warning">Recuerdame</Checkbox>
          <Button style={{ backgroundColor: 'var(--primaryColor)', color: 'white', fontSize: '1rem', borderRadius: '8px'}} endContent={<FiArrowRight />}>Iniciar Sesion</Button>
        </form>
      </section>
    </main>
  )
}