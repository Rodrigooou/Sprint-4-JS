import './App.css';

import Header from './components/Header';
import Rodape from './components/Rodape';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
     
      <Header/>
      <Outlet/>
      <Rodape/>
    </>
  )
}


