import styles from "../styles.module.scss"

export const Option = ( { value, name, text } ) => {
  return (
    <option value={value} name={name}>{text}</option>
  )
}