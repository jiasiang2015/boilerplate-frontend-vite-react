import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import './__mocks__/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
)
