import React from 'react'
import ReactDOM from 'react-dom/client'
import Index,{loader as clientesLoader} from './pages/Index'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import './index.css'
import {
  createBrowserRouter,                  // Definir rutas por medio de objeto principal
  RouterProvider                        // Recibira las rutas y las mostrara.
} from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'

//-----------------| Objeto que tendra las rutas |----------------- 
const router = createBrowserRouter([    // Arreglo de rutas
  {
    path: '/',                          // '/'  para pagina principal
    element: (<Layout />),              // Lo que se mostrara en la pagina
    children: [                         // Lo que este dentro hereda lo del componente 'Layout'
      {
        index: true,                    // Se carga en la pag. principal
        element: (<Index />),
        loader: clientesLoader,         // Obtener datos desde una API o un objeto(puede ser un state)
        errorElement:<ErrorPage/>       // Manejar error ocasionado con un componente
      },
      {                                 
        path: '/clientes/nuevo',        // Ruta para ver contenido de 'element'
        element: (<NuevoCliente />),    // Lo que se mostrara en el navegador
        action: nuevoClienteAction      // Procesar entrada de datos de un formulario
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider       // Para implementar las rutas
      router={router}     // Recibe el objeto con las rutas
    />
  </React.StrictMode>
)
