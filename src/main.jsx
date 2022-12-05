import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,                  // Definir rutas por medio de objeto principal
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([    // Arreglo de rutas
  {
    path: '/',                          // './'  para pagina principal
    element:(<h1>Desde inicio</h1>)     // Lo que se mostrara en la pagina
  },
  {
    path: '/test',
    element:(<h1>Desde test</h1>)
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>
)
