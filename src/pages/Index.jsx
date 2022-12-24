import { useLoaderData } from 'react-router-dom'  // Acceder a lo que retorna 'loader'  
import Cliente from '../components/Cliente'
import { obtenerClientes } from '../data/Clientes'

//--------------------------| Para agregarle state a la aplicacion |--------------------------
export const loader = () => {               // PARA QUE FUNCIONE TIENE QUE RETORNAR ALGO
  const clientes = obtenerClientes()      // Obtiene los clientes del archivo que obtuvo del back-end
  return clientes
}

//--------------------------| Funcion principal |--------------------------
const Index = () => {
  const clientes = useLoaderData()    // Recuperar datos y colocarlos

//--------------------------| Valor que regresara |--------------------------
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>
      {clientes.length ?
        (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>Cliente</th>
                  <th className='p-2'>Contato</th>
                  <th className='p-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
                ))}
            </tbody>
          </table>
      )
      :
      (<p className='text-center mt-10'>No hay clientes</p>)
      }
    </>
  )
}

export default Index
