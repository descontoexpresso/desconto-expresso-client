import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 


  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container  flex justify-between text-lg">
            <h1 className='text-2xl font-bold uppercase'>Desconto Expresso</h1>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Categorias</div>
              {/* <div className='hover:underline'>Produtos</div> */}
              <Link to='/about' className='hover:underline'>Sobre Nós</Link>
              <div className='hover:underline '>Contato</div>
              <div className='hover:underline'>Cadastrar</div>
              <div className='hover:underline'>Entrar</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar