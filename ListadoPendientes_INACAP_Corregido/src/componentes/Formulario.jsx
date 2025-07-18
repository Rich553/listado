import { useState } from 'react';

function Formulario({ agregar }) {
  const [texto, setTexto] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    agregar(texto);
    setTexto('');
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;