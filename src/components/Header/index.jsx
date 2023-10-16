import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export const Header = ( { backBttn }) => {
  return (
    <header className={!backBttn ? styles.header__container1 : styles.header__container2}>
        <h1 className={`${styles.header__title} title1`}>Kenzie Hub</h1>
        {backBttn ? <Link to="/"><button className={styles.header__bttn}>voltar</button></Link> : null}
    </header>
  )
}