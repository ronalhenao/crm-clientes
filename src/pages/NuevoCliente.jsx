import React from 'react'
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import { agregarCliente } from '../api/Clientes';
import Error from '../components/Error';
import Formulario from '../components/Formulario';

export const action = async ({ request }) => {
  const formData = await request.formData();

  // console.log(formData.get('nombre'))
  // console.log([...formData])
  const datos = Object.fromEntries(formData);
  //console.log(datos);
  const email = formData.get('email');
  //console.log( Object.values(datos) )

  // validacion campos
  const errores = [];
  if( Object.values(datos).includes('') ){
    errores.push('Todos los campos son obligatorios')
  }

  // validacion email con expresión regular
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if( !regex.test(email) ){
    errores.push('El mail no es válido');
  }

  // Retornar datos si hay errores
  if( Object.keys(errores).length ){
    //console.log(Object.keys(errores), 'test')
    return errores
  }

  await agregarCliente(datos);

  return redirect('/')

}

const NuevoCliente = () => {
  
  const errores = useActionData();
  const navigate = useNavigate();

  //console.log(errores)

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>LLena todos los campos para registrar un nuevo cliente</p>
      
      <div className='flex justify-end'>
        <button 
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={ () => navigate(-1) }>
            Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

        {
          errores?.length && errores.map( (error, i) => <Error key={ i }>{ error }</Error> )
        }
        
        <Form
          method='POST'
          noValidate
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