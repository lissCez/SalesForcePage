import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/index.tsx';
import Login from './Pages/Login/index.tsx';
import TesteUmMes from './Pages/TesteUmMes/index.tsx';
import Quiz from './Pages/Quiz/index.tsx';
import About from "./Pages/About/index.tsx";
import Teste10Minutos from './Pages/Teste10Minutos/index.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:'/Login',
    element: <Login/>,
  },
  {
    path:'/Teste10Minutos',
    element:<Teste10Minutos/>,
  },
  {
    path:'/TesteUmMes',
    element:<TesteUmMes/>,
  },
  {
    path:'/Quiz',
    element:<Quiz/>
  },
  {
    path:'/About',
    element:<About/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)