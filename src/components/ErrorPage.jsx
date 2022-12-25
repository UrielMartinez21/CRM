import { useRouteError } from 'react-router-dom'    // Obtendra el error que este generando

const ErrorPage = () => {
  const error = useRouteError()                     // Guardara el error que tenga
  return (
    <div className='space-y-8'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>
        CRM-Clientes
      </h1>
      <p className='text-center'>Hubo un error</p>
      <p className='text-center'>
        {
          error.statusText
          ||                                      // Cualquiera que exista
          error.message
        }
      </p>
    </div>
  )
}

export {ErrorPage}