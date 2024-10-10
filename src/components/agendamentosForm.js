import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AgendamentosForm() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [exame, setExame] = useState('');
  const [data, setData] = useState('');
  const [destino, setDestino] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoAgendamento = { nome, cpf, exame, data, destino };

    try {
      await axios.post('http://localhost:3001/agendamentos', novoAgendamento);
      navigate('/confirmacao');
    } catch (error) {
      console.error('Erro ao salvar o agendamento:', error);
    }
  };

  return (
    <div>
      <h1>Agendar Nova Viagem</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Exame:
          <input
            type="text"
            value={exame}
            onChange={(e) => setExame(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Data da Viagem:
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Destino:
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Salvar Agendamento</button>
      </form>
    </div>
  );
}

export default AgendamentosForm;