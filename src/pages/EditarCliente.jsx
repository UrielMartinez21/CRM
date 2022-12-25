import { obtenerCliente } from "../data/Clientes"
import { useLoaderData, Form, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"

export const loader = async({ params }) => {              // Obtendra un objeto con el valor
  const cliente = await obtenerCliente(params.clienteId)  // Mandamos el id a la funcion
  if (Object.values(cliente).length === 0) {
    throw new Response('', {                              // Si se cumple la condicion ya no sigue
      status: 404,
      statusText: "Cliente no encontrado"
    })
  }
  return cliente
}

const EditarCliente = () => {
//--------------------------| Obtencion de datos del 'Loader' |--------------------------
  const cliente = useLoaderData()       // Objeto que se editara
  
//--------------------------| Navigate |--------------------------
  const navigate = useNavigate()        // Navegar entre botones
  
//--------------------------| Valor que regresara |--------------------------
  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>Editar Clientes</h1>
      <p className='mt-3'>A continuacion podras editar los datos de un cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}    // Direccionar entre paginas o con '/'
        >
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        <Form
          method='post'                   // Metodo que se mandara cuando se presione 'enviar'
          noValidate                      // Desactivar validacion de HTML
        >
          <Formulario cliente={cliente} />
          <input 
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </div>
  )
}

export default EditarCliente
