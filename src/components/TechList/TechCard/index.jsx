import { useContext } from "react"
import styles from "../styles.module.scss"
import { TechContext } from "../../../providers/TechContext"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const TechCard = ({ title, status, id, tech }) => {
  const { deleteTech, setEditingTech } = useContext(TechContext)
  return (
    <li className={styles.list__item}>
      <div className={styles.title__container}>
        <h3 className={`${styles.item__title} title2`}>{title}</h3>
      </div>

      <div className={styles.bottom__container}>
        <p className={`${styles.item__status} headline`}>{status}</p>

        <div className={styles.buttons__container}>
          <button onClick={() => setEditingTech(tech)} className={styles.bttn}><EditOutlinedIcon fontSize="small" className={styles.bttnIcon}/></button>
          <button onClick={() => deleteTech(id)} className={styles.bttn}><DeleteOutlineOutlinedIcon fontSize="small" className={styles.bttnIcon}/></button>
        </div>
      </div>
    </li>
  )
}