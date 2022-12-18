import {
    useNavigate,                                        // Hook para navegar entre paginas
    Form                                                // Para manejar el envio de formularios
} from 'react-router-dom'
import Formulario from '../components/Formulario'       // Componente creado por desarrollador

//--------------------------| Metodo que sera accedido desde 'main' |--------------------------
export const action = ({request}) => {                  // Funcionara para 'NuevoCliente'
    console.log(request)                                // Se mandara a llamar desde main
}

//--------------------------| Componente principal del archivo |--------------------------
const NuevoCliente = () => {
    const navigate = useNavigate()                      // Para navegar entre paginas

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
                <Form
                    method='post'                   // Metodo que se mandara cuando se presione 'enviar'
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
