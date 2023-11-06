import { forwardRef } from "react"
import styles from "./styles.module.scss"

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className={styles.input__container}>
        <label className={`${styles.input__label} headline`}>{label}</label>
        <input ref={ref} {...rest} className={styles.input__box} /> 
    </div>
  )
})