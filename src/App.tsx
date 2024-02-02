import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import { Task } from './components/List/Task'
import { Header as ListHeader } from './components/List/Header'
import { Empty } from './components/List/Empty'

import styles from './App.module.css'

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button>
            Criar <PlusCircle size={20} weight='bold'/>
          </button>
        </div>

        <div className={styles.taskList}>
          <ListHeader />

          <div>
            <Task />
          </div>

          <Empty />

        </div>
      </section>
    </main>
  )
}