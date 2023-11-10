import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import IBM from './routes/IBM.jsx';
import Proposta from './routes/Proposta.jsx';
import Funcionamento from './routes/Funcionamento.jsx';
import Dados from './routes/Dados.jsx';
import Cadastro from './routes/Cadastro.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children:[
      {path: "/", element: <Home/>},
      {path: "/dados", element: <Dados/>},
      {path: "/proposta", element: <Proposta/>},
      {path: "/ibm", element: <IBM/>},
      {path: "/funcionamento", element: <Funcionamento/>},
      {path: "/cadastro", element: <Cadastro/>},
      {path: "/login", element: <Login/>}
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
