import { Link } from "react-router-dom";
//import React from 'react'

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Desconto Expresso</div>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrarCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link> 
            <Link to="/cadastrarProduto" className="hover:underline">
              Cadastrar Produto
            </Link> 
            <Link to="/about" className="hover:underline">
            About
            </Link> <Link to="/sair" className="hover:underline">
            Sair
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
