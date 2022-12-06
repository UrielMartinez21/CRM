import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
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
        path: '/clientes/nuevo',
        element:(<h1>Desde test</h1>)
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>
)
