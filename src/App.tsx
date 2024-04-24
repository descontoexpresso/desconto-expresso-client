//import React from "react";
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
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioEditarProduto from "./components/produtos/formularioProduto/FormularioEditarProduto";
import About from "./pages/about/About";
import FormularioCadastrarProduto from "./components/produtos/formularioProduto/FormularioCadastrarProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";

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
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/about" element={<About />} />
              <Route path="/editarProduto/:id" element={<FormularioEditarProduto />} />
              <Route path="/cadastrarProduto" element={<FormularioCadastrarProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;