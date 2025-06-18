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
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

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
// root.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>
// );

//Chapter_09
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// );

//Chapter_10
// root.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>
// );

//Chapter_11
// root.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>
// );

//Chapter_12
// root.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>
// );

//Chapter_13
// root.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>
// );

//Chapter_14
// root.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>
// );

//Chapter_15
root.render(
  <React.StrictMode>
    <Blocks/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
