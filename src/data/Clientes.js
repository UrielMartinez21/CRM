/*
      -------------| Requests HTTP |-------------
*/
//---> Metodo get al back-end
export const obtenerClientes = async () => {
  const respuesta = await fetch(import.meta.env.VITE_API_URL) // Se obtiene el objeto
  const resultado = await respuesta.json()                    // Se convierte en JSON
  return resultado
}

//---> Metodo get al back-end
export const obtenerCliente = async (id) => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)  // Se obtiene el objeto
  const resultado = await respuesta.json()                                // Se convierte en JSON
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

//---> Metodo put al back-end
export const actualizarCliente = async (id, datos) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",                      // Fetch por defecto usa metodo get
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

export const eliminarCliente = async (id) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE"                       // Fetch por defecto usa metodo get
    })
    await respuesta.json()                // Retornara verdadero o falso
  } catch (error) {
    console.log(error)                    // Mensaje de error
  }
}