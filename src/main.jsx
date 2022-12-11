import React from 'react'
import ReactDOM from 'react-dom/client'
import Index,{loader as clientesLoader} from './pages/Index'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import './index.css'
import {
  createBrowserRouter,                  // Definir rutas por medio de objeto principal
  RouterProvider                        // Recibira las rutas y las mostrara
} from 'react-router-dom'

const router = createBrowserRouter([    // Arreglo de rutas
  {
    path: '/',                          // './'  para pagina principal
    element: (<Layout />),              // Lo que se mostrara en la pagina
    children: [                         // Lo que este dentro hereda lo del componente 'Layout'
      {
        index: true,                    // Se carga en la pag. principal
        element: (<Index />),
        loader: clientesLoader
      },
      {                                 
        path: '/clientes/nuevo',
        element:(<NuevoCliente/>)
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
