import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

//Chapter_04
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

//Chapter_05
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// )

//Chapter_06
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// );

//Chapter_07
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// );

//Chapter_08
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
