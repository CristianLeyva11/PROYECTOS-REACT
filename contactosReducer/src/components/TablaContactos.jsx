const TablaContactos = ({ contactos = [], dispatch, handleEdit }) => {
    const handleDelete = (id) => {
      const deleteAction = {
        type: "delete",
        payload: id,
      };
      dispatch(deleteAction);
    };
  
    const calcularEdad = (fechaNacimiento) => {
      const hoy = new Date();
      const cumpleanos = new Date(fechaNacimiento);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      const mes = hoy.getMonth() - cumpleanos.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
      }
      return edad;
    };
  
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Número</th>
            <th>Sexo</th>
            <th>Edad</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => {
            const finalId = contacto.id.split("-");
            const edad = calcularEdad(contacto.fechaNacimiento);
  
            return (
              <tr key={contacto.id}>
                <th>{finalId[0]}</th>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>{contacto.sexo}</td>
                <td>{edad}</td>
                <td>
                  <img src={contacto.imagen} alt="avatar" width="50" height="50" />
                </td>
                <td>
                  <button onClick={() => handleDelete(contacto.id)} className="btn btn-danger">Eliminar</button>
                  <button onClick={() => handleEdit(contacto)} className="btn btn-warning">Actualizar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default TablaContactos;
  