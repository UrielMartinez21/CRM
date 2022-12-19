export const obtenerClientes = async() => {
    const respuesta = await fetch(import.meta.env.VITE_API_URL) // Se obtiene el objeto
    const resultado = await respuesta.json()                    // Se convierte en JSON
    return resultado
}