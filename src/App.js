import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViagensList from './components/viagensList';
import AgendamentoForm from './components/agendamentosForm';
import Confirmacao from './components/confirmationPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Agendamento de Viagens</h1>
        <Routes>
          <Route path="/" element={<ViagensList />} />
          <Route path="/agendar" element={<AgendamentoForm />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;