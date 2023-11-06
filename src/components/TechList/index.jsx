import { useContext, useState } from "react";
import { PageContext } from "../../providers/PageContext";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../Modais/CreateTechModal";
import styles from "./styles.module.scss";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../Modais/EditTechModal";

export const TechList = () => {
  const { techList } = useContext(PageContext);
  const { editingTech } = useContext(TechContext)
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.techs__container}>
        <h3 className={`${styles.list__title} title2`}>Tecnologias</h3>
        <button
          className={styles.add__button}
          onClick={() => setOpenModal(true)}
        >
          +
        </button>
      </div>

      {openModal ? <CreateTechModal setOpenModal={setOpenModal} /> : null}
      {editingTech ? <EditTechModal/> : null}

      <div className={styles.list__container}>
        <ul className={styles.techs__list}>
          {techList?.length === 0 ? (
            <h3>Você ainda não tem nenhuma Tecnologia registrada</h3>
          ) : null}
          {techList?.map((tech) => {
            return (
              <TechCard
                title={tech.title}
                status={tech.status}
                id={tech.id}
                key={tech.id}
                tech={tech}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
