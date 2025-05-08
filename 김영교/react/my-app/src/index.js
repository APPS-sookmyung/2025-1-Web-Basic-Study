import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chpater_04/clock';

// React 18 방식 사용
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
});

reportWebVitals();

//React 18에서는 더 이상 ReactDOM.render(...)를 쓰지 않습니다.
//→ createRoot(...)를 사용해야 해요.
