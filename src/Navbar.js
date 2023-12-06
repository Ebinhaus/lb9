import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";
const Navbar= () =>{
 return (
 <div>
  <ul>
  <li>
   <Link to="/">Главная</Link>
  </li>
  <li>
   <Link to="/info">Информация</Link>
  </li>
  <li>
   <Link to="/about">О университете</Link>
  </li>
  <li>
   <Link to="/contact">Контакты</Link>
  </li>
  <li>
    <Link to="/chart">График</Link>
  </li>
  <li>
    <Link to="/video">Видео-плеер</Link>
  </li>
  </ul>
 </div>
 );
}
export default Navbar;