import React from "react";
import "./Destaques.css";
import sideDown from "../../../assets/sidedown.png";
import sideTop from "../../../assets/sidetop.png";
import { useNavigate } from "react-router-dom";

function Destaques() {
  const navigate = useNavigate();

  const goToProdutos = () => {
    navigate("/produtos");
  };

  return (
    <div className="flex gap-8  p-11 items-center justify-center flex-wrap">
      <div className="square bg-[url('./assets/produtos-destaque.jpg')] bg-contain bg-center bg-no-repeat bg-cover rounded-xl flex justify-center items-center  flex-col">
        <span className=" text-4xl  font-semibold text-center">
          Inovando para tornar o mercado mais justo e acessível a todos!
        </span>
        <button
          className="bg-transparent  btn  p-4 px-5 mt-7 "
          onClick={goToProdutos}
        >
          Veja mais
        </button>
      </div>
      <div className="flex  flex-col gap-8">
        <div
          id="top"
          className="side top bg-[url()] border border-sky- 600 rounded-xl  flex justify-center items-center  overflow-hidden "
        >
          <span className="  text-base font-semibold text-center">
            Laticínios para a sua jornada de saúde e bem-estar!
          </span>
          <img src={sideTop} alt="" />
        </div>
        <div className="side bg-[url()] border border-sky- 600 rounded-xl  flex justify-center items-center overflow-hidden ">
          <span className="  text-base font-semibold text-center">
            Frutas e vegetais frescos para todos: saúde acessível, sabor
            inigualável!
          </span>
          <img src={sideDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Destaques;
