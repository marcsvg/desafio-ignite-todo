import { Check, Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { ITask } from '../../App'

interface TaskProps {
  data: ITask
  removeTask: (id: number) => void
  toggleChecked: ({id, value}: {id: number, value: boolean}) => void
}

export function Task({ data, removeTask, toggleChecked }: TaskProps) {
  function toggleTaskCheck() {
    toggleChecked({id: data.id, value: !data.isChecked})
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const uncheckedStyle = styles['checkbox-unchecked']
  const checkedStyle = styles['checkbox-checked']
  const paragraphCheckedStyle = styles['paragraph-checked']

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={toggleTaskCheck}>
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox} ${data.isChecked ? checkedStyle : uncheckedStyle}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${data.isChecked ? paragraphCheckedStyle : ''}`}>
            {data.name}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={24} />
      </button>
    </div>
  )
}