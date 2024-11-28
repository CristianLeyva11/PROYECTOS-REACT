import { useEffect, useReducer, useState } from "react";
import Formulario from "./Formulario";
import TablaContactos from "./TablaContactos";
import { ContactosReducer } from "../reducers/ContactosReducer";

const init = () => {
    //Definimos el localstorage
    const contactos = localStorage.getItem("contactos");

    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);
  const [formView, setFormView] = useState(false);
  const [contactoActual, setContactoActual] = useState(null); // Estado para el contacto a actualizar

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  // Función para manejar la actualización
  const handleEdit = (contacto) => {
    setContactoActual(contacto);
    setFormView(true); // Abre el formulario
  };

  return (
    <div className="container mt-3">
      <button onClick={() => { setFormView(!formView); setContactoActual(null); }} className="btn btn-success">
        {!formView ? "+ Agregar contacto" : "- Cerrar Formulario"}
      </button>
      {formView && (
        <Formulario
          dispatch={dispatch}
          contactoActual={contactoActual} // Pasamos el contacto a actualizar
          setContactoActual={setContactoActual} // Para limpiar el estado después de actualizar
        />
      )}
      <TablaContactos contactos={state} dispatch={dispatch} handleEdit={handleEdit} />
    </div>
  );
};


export default Contactos;