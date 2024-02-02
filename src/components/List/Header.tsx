import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas Criadas</p>
        <span>5</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>2 de 5</span>
      </aside>
    </header>
  )
}