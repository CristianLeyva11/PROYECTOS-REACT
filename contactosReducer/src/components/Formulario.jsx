import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ dispatch, contactoActual, setContactoActual }) => {
  const [data, setData] = useState({ nombre: "", numero: "", sexo: "", fechaNacimiento: "" });
  const [imagenBase64, setImagenBase64] = useState("");

  useEffect(() => {
    if (contactoActual) {
      setData({
        nombre: contactoActual.nombre,
        numero: contactoActual.numero,
        sexo: contactoActual.sexo,
        fechaNacimiento: contactoActual.fechaNacimiento,
      });
      setImagenBase64(contactoActual.imagen); // Carga la imagen existente en Base64
    } else {
      // Limpiamos el formulario cuando no hay contacto actual
      setData({ nombre: "", numero: "", sexo: "", fechaNacimiento: "" });
      setImagenBase64("");
    }
  }, [contactoActual]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagenBase64(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddOrUpdate = () => {
    if (contactoActual) {
      // Actualizar contacto
      const actionUpdate = {
        type: "update",
        payload: {
          id: contactoActual.id, // Mantiene el mismo ID
          nombre: data.nombre,
          numero: data.numero,
          sexo: data.sexo,
          fechaNacimiento: data.fechaNacimiento,
          imagen: imagenBase64,
        },
      };
      dispatch(actionUpdate);
      setContactoActual(null); // Limpiamos el contacto actual después de la actualización
    } else {
      // Agregar nuevo contacto
      const actionAdd = {
        type: "add",
        payload: {
          id: uuid(),
          nombre: data.nombre,
          numero: data.numero,
          sexo: data.sexo,
          fechaNacimiento: data.fechaNacimiento,
          imagen: imagenBase64,
        },
      };
      dispatch(actionAdd);
    }
  };

  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Nombre:
        <input type="text" name="nombre" value={data.nombre} onChange={handleChange} className="form-control" />
      </label>

      <label className="mx-1 d-grid gap-2">
        Número:
        <input type="text" name="numero" value={data.numero} onChange={handleChange} className="form-control" />
      </label>

      <label className="mx-1 d-grid gap-2">
        Sexo:
        <select name="sexo" value={data.sexo} onChange={handleChange} className="form-control">
          <option value="">Selecciona</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </label>

      <label className="mx-1 d-grid gap-2">
        Cumpleaños:
        <input type="date" name="fechaNacimiento" value={data.fechaNacimiento} onChange={handleChange} className="form-control" />
      </label>

      <label className="mx-1 d-grid gap-2">
        Imagen:
        <input type="file" onChange={handleFileChange} className="form-control" />
      </label>

      <button onClick={handleAddOrUpdate} className="btn btn-info mt-2">
        {contactoActual ? "Actualizar" : "Agregar"}
      </button>
    </div>
  );
};

export default Formulario;
