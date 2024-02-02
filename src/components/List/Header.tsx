import styles from './Header.module.css'

interface HeaderProps {
  taskCounter: number
  checkedTasksCounter: number
}

export function Header({ taskCounter, checkedTasksCounter }: HeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas Criadas</p>
        <span>{taskCounter}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>{checkedTasksCounter} de {taskCounter}</span>
      </aside>
    </header>
  )
}