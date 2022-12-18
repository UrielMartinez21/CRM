import { useLoaderData } from 'react-router-dom'  // Acceder a lo que retorna 'loader'  
import Cliente from '../components/Cliente'

//--------------------------| Para agregarle state a la aplicacion |--------------------------
export const loader = () => {               // Para que funcione tiene que retornar algo
    const clientes = [                      // Equivalente a metodo 'GET'
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ]
    return clientes                   // Se puede retornar lo que sea
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
