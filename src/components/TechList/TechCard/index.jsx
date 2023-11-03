import { useContext } from "react"
import styles from "../styles.module.scss"
import { TechContext } from "../../../providers/TechContext"

export const TechCard = ({ title, status, id }) => {
  const { deleteTech } = useContext(TechContext)
  return (
    <li className={styles.list__item}>
      <div className={styles.title__container}>
        <h3 className={`${styles.item__title} title2`}>{title}</h3>
      </div>

      <div className={styles.bottom__container}>
        <p className={`${styles.item__status} headline`}>{status}</p>

        <div className={styles.buttons__container}>
          <button className={styles.bttn}>E</button>
          <button onClick={() => deleteTech(id)} className={styles.bttn}>X</button>
        </div>
      </div>
    </li>
  )
}