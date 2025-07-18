import { useState } from 'react';

function Lista({ tareas, eliminar, editar }) {
  const [modo, setModo] = useState(null);
  const [nuevo, setNuevo] = useState('');

  return (
    <ul>
      {tareas.map((t, i) => (
        <li key={i}>
          {modo === i ? (
            <>
              <input
                type="text"
                value={nuevo}
                onChange={(e) => setNuevo(e.target.value)}
              />
              <button
                onClick={() => {
                  editar(i, nuevo);
                  setModo(null);
                }}
              >
                Guardar
              </button>
              <button onClick={() => setModo(null)}>Cancelar</button>
            </>
          ) : (
            <>
              {t}
              <button onClick={() => eliminar(i)}>Eliminar</button>
              <button
                onClick={() => {
                  setModo(i);
                  setNuevo(t);
                }}
              >
                Editar
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Lista;