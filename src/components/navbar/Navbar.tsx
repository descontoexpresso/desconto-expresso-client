import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
//import React from 'react'
import logo  from '../../assets/desconto-expresso-logo.png';

function Navbar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }
  
  return (
    <>
      <div className="w-full bg-verde-claro-hover flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="flex justify-center itens-center text-2xl text-verde-escuro italic font-black uppercase">
            <img src={logo} className="w-10"></img>
            <h1>Desconto Expresso</h1>
          </div>

          <div className="flex gap-4 font-bold">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/home" className="hover:underline">Home</Link>
            <Link to="/categorias" className="hover:underline">Categorias</Link>
            <Link to="/cadastrarCategoria" className="hover:underline">Cadastrar Categoria</Link>
            <Link to="/produtos" className="hover:underline">Produtos</Link> 
            <Link to="/cadastrarProduto" className="hover:underline">Cadastrar Produto</Link> 
            <Link to="/about" className="hover:underline">About</Link> 
            <Link to="/home" onClick={logout} className="hover:underline">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
