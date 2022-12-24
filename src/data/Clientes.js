//---> Metodo get al back-end
export const obtenerClientes = async () => {
  const respuesta = await fetch(import.meta.env.VITE_API_URL) // Se obtiene el objeto
  const resultado = await respuesta.json()                    // Se convierte en JSON
  return resultado
}

//---> Metodo post al back-end
export const agregarCliente = async (datos) => {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",                     // Fetch por defecto usa metodo get
      body: JSON.stringify(datos),        // Convierte los datos a un JSON
      headers: {
        "Content-Type":"application/json" // Decimos que la peticion sera de tipo JSON
      }
    })
    await respuesta.json()                // Retornara verdadero o falso
  } catch (error) {
    console.log(error)                    // Mensaje de error
  }
}