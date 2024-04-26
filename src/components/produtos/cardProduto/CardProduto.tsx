import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import placeholderImage from "../../../assets/placeholder-image.jpg";
import "./CardProduto.css";

interface CardProdutoProps {
  produto: Produto;
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto }) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = placeholderImage;
  };

  const formatarData = (data: string) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = dataObj.toLocaleString("default", { month: "long" });
    return `${dia} de ${mes}`;
  };

  return (
    <div className="border-none flex flex-col gap-5 rounded overflow-hidden justify-between w-96 rounded-lg">
      <Link to={`/pageProduto/${produto.id}`}>
        <img
          className="w-full h-80"
          src={produto.fotoProduto}
          alt={produto.nomeProduto}
          onError={handleImageError}
        />
      </Link>
      <h4 className="text-lg font-semibold uppercase">{produto.nomeProduto}</h4>
      <p className="h-7 mb-3">{produto.descricaoProduto}</p>
      <p>
        <span className="font-semibold"> Categoria: </span>
        {produto.categoria?.nomeCategoria}
      </p>
      <p>
        <span className="font-semibold">Data de Validade: </span>
        {formatarData(produto.dataValidade)}
      </p>
      <div className="flex justify-between ">
        <p className="text-xl font-semibold">
          <span>R$</span> {produto.preco}
        </p>
        <button className="btn-buy p-2 rounded-lg text-[white]">Comprar</button>
      </div>

      <div className="flex mt-2">
        <Link
          to={`/editarProduto/${produto.id}`}
          className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarProduto/${produto.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
};

export default CardProduto;
