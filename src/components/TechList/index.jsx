import { useContext, useState } from "react"
import { PageContext } from "../../providers/PageContext"
import { TechCard } from "./TechCard"
import { CreateTechModal } from "../Modais/CreateTechModal"
import styles from "./styles.module.scss"

export const TechList = () => {
    const { techList } = useContext(PageContext)
    const [openModal, setOpenModal] = useState(false)
  return (
    <>
        <div className={styles.techs__container}>
            <h3 className={`${styles.list__title} title2`}>Tecnologias</h3>
            <button className={styles.add__button} onClick={() => setOpenModal(true)}>+</button>
        </div>

        {openModal ? <CreateTechModal setOpenModal={setOpenModal}/> : null}

        <div className={styles.list__container}>
            <ul className={styles.techs__list}>
                {techList.map((tech) => <TechCard title={tech.title} status={tech.status} id={tech.id} key={tech.id}/>)}
            </ul>
        </div>
    </>
  )
}