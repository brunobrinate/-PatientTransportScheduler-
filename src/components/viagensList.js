import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViagensList() {
  const [agendamentos, setAgendamentos] = useState([]);

  const viagensMock = [
    { id: 1, data: '2024-10-10', cidade: 'Cidade X', horario: '08:00' },
    { id: 2, data: '2024-10-12', cidade: 'Cidade Y', horario: '14:00' },
  ];

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/agendamentos');
        setAgendamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    fetchAgendamentos();
  }, []);

  const handleRemoveAgendamento = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/agendamentos/${id}`);
      setAgendamentos(agendamentos.filter((agendamento) => agendamento.id !== id));
    } catch (error) {
      console.error('Erro ao remover o agendamento:', error);
    }
  };

  return (
    <div>
      <h1>Agendamentos Salvos</h1>
      <h2>Viagens Disponíveis na Semana</h2>
      <ul>
        {viagensMock.map((viagem) => (
          <li key={viagem.id}>
            <strong>Data:</strong> {viagem.data} <br />
            <strong>Cidade:</strong> {viagem.cidade} <br />
            <strong>Horário:</strong> {viagem.horario} <br />
            <hr />
          </li>
        ))}
      </ul>
      <Link to="/agendar">
        <button>Agendar Nova Viagem</button>
      </Link>

      <h2>Agendamentos Salvos</h2>
      {agendamentos.length > 0 ? (
        <ul>
          {agendamentos.map((agendamento) => (
            <li key={agendamento.id}>
              <strong>Nome:</strong> {agendamento.nome} <br />
              <strong>CPF:</strong> {agendamento.cpf} <br />
              <strong>Exame:</strong> {agendamento.exame} <br />
              <strong>Data:</strong> {agendamento.data} <br />
              <strong>Destino:</strong> {agendamento.destino} <br />
              <button onClick={() => handleRemoveAgendamento(agendamento.id)}>
                Remover
              </button>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum agendamento encontrado.</p>
      )}
    </div>
  );
}

export default ViagensList;