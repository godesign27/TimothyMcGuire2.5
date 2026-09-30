import React from 'react';
import { createRoot } from 'react-dom/client';
import CoretechsPrototype from './components/coretechs-prototype/CoretechsPrototype';
import './index.css';

createRoot(document.getElementById('proto-root')!).render(
  <React.StrictMode>
    <CoretechsPrototype />
  </React.StrictMode>,
);
