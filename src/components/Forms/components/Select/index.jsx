import { forwardRef } from "react"
import styles from "./styles.module.scss"

export const Select = forwardRef(( { name,  children }, ref ) => {
  return (
    <div className={styles.select__container}>
        <label className={`${styles.select__label} headline`}>Selecionar Modulo</label>
        <select className={styles.select__box} name={name} ref={ref}>
            { children }
        </select>
    </div>
  )
})