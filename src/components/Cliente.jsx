import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cliente = ({ cliente }) => {

  const navigate = useNavigate();

  const { nombre, email, empresa, telefono, id } = cliente

  return (
    <tr className='border-b'>
      <td className='p-6 space-y-1'>
        <p className='text-2xl text-gray-800'>{ nombre }</p>
        <p>{ empresa }</p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Email:</span> { email }
        </p>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-bold'>Tel:</span> { telefono }
        </p>
      </td>
      <td className='p-6 flex gap-4'>
        <button
          type='button'
          className='text-blue-600 hover:text-blue-700 font-bold uppercase text-xs'
          onClick={ () => navigate(`/clientes/${ id }/editar`) }
        >Editar</button>
        <button
          type='button'
          className='text-red-600 hover:text-red-700 font-bold uppercase text-xs'
        >Eliminar</button>
      </td>
    </tr>
  )
}

export default Cliente