import { useForm } from "react-hook-form";
import { Input } from "../../Forms/components/Input";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, updateTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    values: {
        title: editingTech.title,
        status: editingTech.status
    }
  });

  const submit = (formData) => {
    updateTech(formData)
  };

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__box}>
        <div className={styles.title__container}>
          <h3 className={`${styles.modal__title} title2`}>
            Tecnologia Detalhes
          </h3>
          <button
            onClick={() => setEditingTech(null)}
            className={styles.close__bttn}
          >
            X
          </button>
        </div>

        <div className={styles.form__container}>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              {...register("title")}
              type="text"
              label="Nome"
              disabled
              className={styles.input__box}
            />

            <div className={styles.select__container}>
              <label className={`${styles.select__label} headline`}>
                Selecionar Modulo
              </label>
              <select
                className={styles.select__box}
                {...register("status")}
                id="statusSelect"
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <button type="submit" className={`${styles.modal__bttn} primary`}>
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
