import { obtenerCliente, actualizarCliente } from "../data/Clientes"
import { useLoaderData, Form, useNavigate, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

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

export const action = async ({ request, params }) => {
  const formData = await request.formData()           // Obtener datos de 'request'
  const datos = Object.fromEntries(formData)          // Se convierte en un objeto para poder ser leido

  const email = formData.get('email')                 // Obtener valor especifico de 'formData'

  //---> Agregar validacion campos vacios
  const errores = []                                // Lista/Arreglo vacio
  if (Object.values(datos).includes('')) {          // Si algun valor del objeto tiene cadena vacia
    errores.push('Falta llenar los campos')         // 'push' añade elementos al final de la lista
  }

  //---> Validar correo
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (!regex.test(email)) {                         // Si no se cumple la condicion
    errores.push('El correo no es valido')
  }

  //---> Retornar datos si hay errores
  if (Object.keys(errores).length) {                // Si tiene algo el arreglo de 'errores'
    return errores
  }
  //---> Actualizar cliente
  await actualizarCliente(params.clienteId, datos)  // Mandamos el objeto despues de validarlo
  return redirect("/")                              // Redireccionara a pagina principal
}

const EditarCliente = () => {
//--------------------------| Obtencion de datos del 'Loader' |--------------------------
  const cliente = useLoaderData()       // Objeto que se editara

//--------------------------| Navigate |--------------------------
  const navigate = useNavigate()        // Navegar entre botones

//--------------------------| Manejo de Action |--------------------------
  const errores = useActionData()       // Manejo de lo que retorna action

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
        {errores?.length && errores.map((error, i) => (<Error key={i}>{error}</Error>))}
        <Form                             // Componente propio de 'react-router-dom'
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
