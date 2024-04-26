import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, cadastrar } from '../../../services/Service';

function FormularioCadastrarProduto() {
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricaoCategoria: '',
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nomeProduto: '',
        descricaoProduto: '',
        estoque: 0,
        preco: 0,
        dataValidade: '',
        fotoProduto: '',
        categoria: null,
        usuario: null,
    });

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
    }, []);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ produto });

        try {
            await cadastrar(`/produtos`, produto, setProduto, {
                headers: {
                    Authorization: token,
                },
            });

            alert('Produto cadastrado com sucesso');
            retornar();
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            } else {
                alert('Erro ao cadastrar o Produto');
            }
        }
    }

    const carregandoCategoria = categoria.descricaoCategoria === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Produto</h1>

            <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nomeProduto">Nome do Produto</label>
                    <input
                        value={produto.nomeProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome do Produto"
                        name="nomeProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricaoProduto">Descrição do Produto</label>
                    <input
                        value={produto.descricaoProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Descrição do Produto"
                        name="descricaoProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="estoque">Estoque do Produto</label>
                    <input
                        value={produto.estoque}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Estoque Disponível do Produto"
                        name="estoque"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço do Produto</label>
                    <input
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Preço do Produto"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="dataValidade">Data de Validade do Produto</label>
                    <input
                        value={produto.dataValidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Data de Validade do Produto"
                        name="dataValidade"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fotoProduto">Foto do Produto</label>
                    <input
                        value={produto.fotoProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Foto do Produto"
                        name="fotoProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => setCategoria(categorias.find(c => c.id === parseInt(e.target.value))!)}>
                        <option value="" disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nomeCategoria}</option>
                        ))}
                    </select>
                </div>
                <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
                    {carregandoCategoria ? <span>Carregando</span> : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioCadastrarProduto;
