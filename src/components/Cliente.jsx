import { Form, redirect, useNavigate } from "react-router-dom"
import { eliminarCliente } from "../data/Clientes"

export const action = async ({ params }) => {   // 'params' crea un objeto con el id del cliente
  await eliminarCliente(params.clienteId)       // Espera a que elimine para pasar a redirect 
  return redirect("/")
}

const Cliente = ({ cliente }) => {
//--------------------------| Direccionamiento de url |--------------------------
  const navigate = useNavigate()

//--------------------------| Destructurar objeto |--------------------------
  const { nombre, empresa, email, telefono, id } = cliente

//--------------------------| Valor que regresara |--------------------------
  return (
    <tr className="border-b">
      <td className='p-6 space-y-2'>  
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email:</span>{email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3 justify-end">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={
            () => navigate(`/clientes/${id}/editar`)  // Redirecciona con el id seleccionado
          }
        >
          Editar
        </button>
        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("Deseas eliminar el registro")) {
              e.preventDefault()
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs "
            >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  )
}

export default Cliente
