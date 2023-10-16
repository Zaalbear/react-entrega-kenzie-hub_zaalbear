import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import styles from "./styles.module.scss"

export const Dashboard = ({ userData, setUserData }) => {
  const navigate = useNavigate()

  const exit = () => {
    localStorage.removeItem("@user_token")
    setUserData("")
    navigate("/")
  }

  return (
    <div className={styles.page__container}>
      <div className={styles.header__container}>
        <h1 className={`${styles.header__title} title1`}>Kenzie Hub</h1>
        <button className={styles.exit__bttn} onClick={exit}>Sair</button> 
      </div>

      <div className={styles.banner__container}>
        <h1 className={`${styles.banner__title} title1`}>Olá, {userData.name}</h1>
        <p className={`${styles.banner__text} headlineBold`}>{userData.course_module}</p>
      </div>

      <div className={styles.main__container}>
        <h2 className={`${styles.main__title} title1`}>Que pena! Estamos em desenvolvimento :(</h2>
        <p className={`${styles.main__text} paragrath`}>Nossa aplicação está em desenvolviment, em breve teremos novidades</p>
      </div>
    </div>
  )
}