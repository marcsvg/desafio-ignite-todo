import { Clipboard } from '@phosphor-icons/react'

import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <Clipboard size={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}