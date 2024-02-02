import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import { Task } from './components/List/Task'
import { Header as ListHeader } from './components/List/Header'
import { Empty } from './components/List/Empty'

import styles from './App.module.css'

export interface ITask {
  id: number
  name: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const countCheckedTasks = tasks.reduce((prevValue, currentValue) => {
    if (currentValue.isChecked) {
      return prevValue + 1
    }
    
    return prevValue
  }, 0)

  function handleNewTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: tasks.length + 1,
      name: inputValue,
      isChecked: false
    }
    
    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleTaskToggle({ id, value } : { id:number, value: boolean }) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {...task, isChecked: value}
      }

      return { ...task }
    })

    setTasks(updatedTask)
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Você está excluindo essa tarefa, deseja continuar ?')) {
      return
    }

    setTasks(filteredTasks)
  }

  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.newTask}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleNewTask}>
            Criar 
            <PlusCircle size={20} weight='bold'/>
          </button>
        </div>

        <div className={styles.taskList}>
          <ListHeader
            taskCounter={tasks.length}
            checkedTasksCounter={countCheckedTasks}
          />

          {tasks.length > 0 ? (
              <div>
                {tasks.map((task) => (
                  <Task 
                    key={task.id}
                    data={task}
                    removeTask={handleRemoveTask}
                    toggleChecked={handleTaskToggle}
                  /> 
                ))}
              </div>
            ) : <Empty />
          }

        </div>
      </section>
    </main>
  )
}