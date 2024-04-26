import "./Home.css";
import Destaques from "../../components/homeComponents/destaques/Destaques";
import { useEffect, useState } from "react";
import { buscar } from "../../services/Service";
import CardProduto from "../../components/produtos/cardProduto/CardProduto";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await buscar("/produtos", setProdutos);
        // Limita a exibição a no máximo 8 produtos
        const produtosLimitados = response.slice(0, 8);
        setProdutos(produtosLimitados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <div>
        <Destaques></Destaques>

        <div>
          {/* Exibe os cards de produto */}
          <div className="flex gap-3 flex-wrap py-8 justify-center items-center">
            {produtos.slice(0, 8).map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
