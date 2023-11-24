import Styles from './styles/dashboards.module.css'

export function Dashboard () {
  return (
    <main className={Styles.container}>
      <section>
        <p>Table</p>
      </section>
      <section>
        <p>Selected</p>
      </section>
    </main>
  )
}