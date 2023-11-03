import { useForm } from "react-hook-form";
import { Input } from "../../Forms/components/Input";
import { Select } from "../../Forms/components/Select";
import { Option } from "../../Forms/components/Select/Option";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const CreateTechModal = ({ setOpenModal }) => {
    const { createTech } = useContext(TechContext)
    const {register, handleSubmit} = useForm()
    
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__box}>
        <div className={styles.title__container}>
          <h3 className={`${styles.modal__title} title2`}>Cadastrar Tecnologia</h3>
          <button onClick={() => {setOpenModal(false)}} className={styles.close__bttn}>X</button>
        </div>

        <div className={styles.form__container}>
          <form onSubmit={handleSubmit(createTech)}>
            <Input
              {...register("title")}
              type="text"
              label="Nome"
              className={styles.input__box}
            />

            <Select className={styles.select__box} {...register("status")} id="statusSelect">
                <Option value={"Iniciante"} text={"Iniciante"} />
                <Option value={"Intermediário"} text={"Intermediário"}/>
                <Option value={"Avançado"} text={"Avançado"}/>
            </Select>

            <button className={`${styles.modal__bttn} primary`}>Cadastrar Tecnologia</button>
          </form>
        </div>
      </div>
    </div>
  );
};
