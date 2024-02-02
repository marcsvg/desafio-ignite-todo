import styles from './Header.module.css'
import logo from '../assets/logoTodo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo da aplicação" />
    </header>
  )
}