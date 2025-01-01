import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>Hello React!</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
