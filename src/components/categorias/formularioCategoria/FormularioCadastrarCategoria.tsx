import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { cadastrar } from "../../../services/Service";

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await cadastrar(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria cadastrada com sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      } else {
        alert("Erro ao cadastrar a Categoria");
      }
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        Cadastre uma nova Categoria
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nomeCategoria">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name="nomeCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nomeCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCategoria({...categoria, [e.target.name]: e.target.value})}
          />
          <label htmlFor="descricaoCategoria">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricaoCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricaoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCategoria({...categoria, [e.target.name]: e.target.value})}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
