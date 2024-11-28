import { useForm } from "react-hook-form";
import { UserContext } from "../context/user/userState";
import { useContext, useState } from "react";
import '../App.css';

const Form = () => {
  const { postUser, putUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = async (data) => {
    const resp = isEdit
      ? await putUser({ name: data.name, job: data.job, id: 2 })
      : await postUser({ name: data.name, job: data.job });
        alert(`Nombre: ${resp.name}\nTrabajo: ${resp.job}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">{isEdit ? "Editar Usuario" : "Crear Usuario"}</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
          className={`form-input ${errors.name ? 'input-error' : ''}`}
        />
        {errors.name && <span className="error-message">Este campo es obligatorio</span>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Trabajo"
          {...register("job", { required: true })}
          className={`form-input ${errors.job ? 'input-error' : ''}`}
        />
        {errors.job && <span className="error-message">Este campo es obligatorio</span>}
      </div>

      <div className="button-group">
        <button type="submit" onClick={() => setIsEdit(false)} className="form-button create">
          Crear usuario
        </button>
        <button type="submit" onClick={() => setIsEdit(true)} className="form-button edit">
          Cambiar usuario
        </button>
      </div>
    </form>
  );
};

export default Form;
