import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Top } from './components/Top';

const container = document.getElementById('app');
const root = createRoot(container!);

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  </Router>
);

root.render(<App />);
