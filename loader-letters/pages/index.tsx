import styles from '../styles/Home.module.css'
import Logo from '../assets/images/logo-avlabs.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Logo className={styles.logo}>
          </Logo>
      </main>
    </div>
  )
}
