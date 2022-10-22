export const obtenerClientes = async() => {

  const respuesta = await fetch( import.meta.env.VITE_API_URL );
  const resultado = await respuesta.json();

  return resultado;
}

export const agregarCliente = async(datos) => {
  console.log(datos)
  try {
    const respuesta = await fetch( import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await respuesta.json();
  } catch (error) {
    console.log(error)
  }
}