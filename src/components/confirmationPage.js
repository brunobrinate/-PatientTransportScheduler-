import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  return (
    <div>
      <h2>Agendamento Salvo com Sucesso!</h2>
      <Link to="/">
        <button>Ver Agendamentos</button>
      </Link>
    </div>
  );
}

export default ConfirmationPage;