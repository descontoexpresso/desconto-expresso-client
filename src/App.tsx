import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import ListaCategoria from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioEditarCategoria from "./components/categorias/formularioCategoria/FormularioEditarCategoria";
import FormularioCadastrarCategoria from "./components/categorias/formularioCategoria/FormularioCadastrarCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import ListaProduto from "./components/produtos/listaProduto/ListaProduto";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastrarCategoria" element={<FormularioCadastrarCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioEditarCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProduto />} />
              <Route path="/cadastrarProduto" element={<FormularioProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;