import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { nombre, email, mensaje });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
