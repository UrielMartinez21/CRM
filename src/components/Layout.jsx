import {
    Outlet,                     // Contenedor dinamico
    Link,                       // Mejor que etiqueta 'a'
    useLocation                 // Indicar en que pagina se encuentra
} from 'react-router-dom'

const Layout = () => {
//--------------------------| Ver en que ruta se encuentra |--------------------------
    const location = useLocation()

//--------------------------| Valor que regresara |--------------------------
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
                <nav className='mt-10'>
                    <Link
                        className={`${location.pathname==='/'?'text-blue-400':'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}
                        to='/'
                    >Clientes</Link>
                    <Link
                        className={`${location.pathname==='/clientes/nuevo'?'text-blue-400':'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}
                        to='/clientes/nuevo'
                    >Nuevo Cliente</Link>
                </nav>
            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet     // Inyectado de informacion de forma dinamica
                />
            </main>
        </div>
    )
}

export default Layout
