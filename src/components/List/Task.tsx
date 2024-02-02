import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task() {
  const uncheckedStyle = styles['checkbox-unchecked']

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked />
          <span className={`${styles.checkbox} ${uncheckedStyle}`}>
          </span>

          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </label>
      </div>

      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}