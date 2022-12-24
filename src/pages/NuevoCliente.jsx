import {
  useNavigate,                                        // Hook para navegar entre paginas
  Form,                                               // Para manejar el envio de formularios
  useActionData,                                      // Para acceder a datos desde otro componente
  redirect                                            // Redireccionara a otra pagina
} from 'react-router-dom'
import Formulario from '../components/Formulario'     // Componente creado por desarrollador
import Error from '../components/Error'
import { agregarCliente } from '../data/Clientes'

//--------------------------| Metodo que sera accedido desde 'main' |--------------------------
export const action = async ({ request }) => {        // Contendra todo lo que usuario ponga en formulario
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
  await agregarCliente(datos)
  return redirect("/")                              // Redireccionara a pagina principal
}

//--------------------------| Componente principal del archivo |--------------------------
const NuevoCliente = () => {
  const navigate = useNavigate()                    // Para navegar entre paginas
  const errores = useActionData()                   // Acceder a lo que retorno 'Action'

//--------------------------| Valor que regresara |--------------------------
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>
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
        <Form
          method='post'                   // Metodo que se mandara cuando se presione 'enviar'
          noValidate                      // Desactivar validacion de HTML
          // action=''
        >
          <Formulario />
          <input 
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value="Registrar Cliente"
          />
        </Form>
      </div>
      </>
  )
}

export default NuevoCliente
