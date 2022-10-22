import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { obtenerClientes } from '../api/Clientes';
import Cliente from '../components/Cliente';

export const loader = () => {
  const clientes = obtenerClientes();
  
  return clientes;

}

const Index = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus Clientes</p>

      {
        clientes.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white text-left'>
              <tr>
                <th className='p-2 pl-6'>Cliente</th>
                <th className='p-2 pl-6'>Contacto</th>
                <th className='p-2 pl-6'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                clientes.map( cliente => (
                  <Cliente
                    key={ crypto.randomUUID() }
                    cliente={ cliente } 
                  />
                ))
              }
            </tbody>
          </table>
        ) : (
          <p className='text-center mt-10'>No hay clientes aún</p>
        )
      }
    </>
  )
}

export default Index