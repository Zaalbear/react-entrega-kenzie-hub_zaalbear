import styles from "./styles.module.scss";
import { useContext } from "react";
import { PageContext } from "../../providers/PageContext";
import { TechList } from "../../components/TechList";
import { TechProvider } from "../../providers/TechContext";

export const Dashboard = () => {
  const { userData, exit } = useContext(PageContext);

  return (
    <div className={styles.page__container}>
      <div className={styles.header__container}>
        <h1 className={`${styles.header__title} title1`}>Kenzie Hub</h1>
        <button className={styles.exit__bttn} onClick={exit}>
          Sair
        </button>
      </div>

      <div className={styles.banner__box}>
        <div className={styles.banner__container}>
          <h1 className={`${styles.banner__title} title1`}>
            Olá, {userData.name}
          </h1>
          <p className={`${styles.banner__text} headlineBold`}>
            {userData.course_module}
          </p>
        </div>
      </div>

      <div className={styles.main__container}>
        <TechProvider>
          <TechList />
        </TechProvider>
      </div>
    </div>
  );
};
