import {Outlet} from 'react-router-dom' // Contenedor dinamico

const Layout = () => {
    return (
        <div>
            <h1
                className='text-6xl font-bold'>
                CRM - React
            </h1>
            
            <Outlet             // Se reemplazara ese componente por lo que se le pase, todo dinamico
            />
        </div>
    )
}

export default Layout
