//import React from "react";
import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria:Categoria
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CardCategorias({categoria}:CardCategoriasProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <p className='p-5 text-3xl bg-slate-200 h-full'>{categoria.nomeCategoria}</p>
      <img className="w-14 h-14" src={categoria.fotoCategoria} alt="" />
      <div className="flex">
        <Link to= {`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to= {`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias
