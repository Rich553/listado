import { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';

function Tareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const guardadas = localStorage.getItem('tareas');
    if (guardadas) {
      setTareas(JSON.parse(guardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregar = (texto) => {
    setTareas([...tareas, texto]);
  };

  const eliminar = (i) => {
    const copia = [...tareas];
    copia.splice(i, 1);
    setTareas(copia);
  };

  const editar = (i, nuevoTexto) => {
    const copia = [...tareas];
    copia[i] = nuevoTexto;
    setTareas(copia);
  };

  return (
    <div className="contenedor">
      <h2>Listado de Pendientes</h2>
      <Formulario agregar={agregar} />
      <Lista tareas={tareas} eliminar={eliminar} editar={editar} />
    </div>
  );
}

export default Tareas;