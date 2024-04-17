import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'

function Cadastro() {

  let navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmarSenhaUsuario, setConfirmarSenhaUsuario] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    sobrenomeUsuario: '',
    cadastroUnico: 0,
    dataNascimento: '',
    telefone: 0,
    cidade: '',
    bairro: '',
    cep: '',
    rua: '',
    numeroCasa: '',
    emailUsuario: '',
    fotoUsuario: '',
    senhaUsuario: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    sobrenomeUsuario: '',
    cadastroUnico: 0,
    dataNascimento: '',
    telefone: 0,
    cidade: '',
    bairro: '',
    cep: '',
    rua: '',
    numeroCasa: '',
    emailUsuario: '',
    fotoUsuario: '',
    senhaUsuario: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenhaUsuario(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenhaUsuario(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenhaUsuario === usuario.senhaUsuario && usuario.senhaUsuario.length >= 8) {
      setIsLoading(true)
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({
        ...usuario,
        senhaUsuario: "", // Reinicia o campo de Senha
      })
      setConfirmarSenhaUsuario("") // Reinicia o campo de Confirmar Senha
    }

    setIsLoading(false)

  }

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen font-bold p-4">
        <div className="flex justify-center items-center flex-grow">
          <div className="fundoCadastro hidden lg:block"></div>
          <form className='flex flex-col justify-center items-center w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
            <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nomeUsuario">Nome</label>
              <input
                type="text"
                id="nomeUsuario"
                name="nomeUsuario"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.nomeUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="sobrenomeUsuario">Sobrenome</label>
              <input
                type="text"
                id="sobrenomeUsuario"
                name="sobrenomeUsuario"
                placeholder="Sobrenome"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.sobrenomeUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="cadastroUnico">Cadastro Único</label>
              <input
                type="number"
                id="cadastroUnico"
                name="cadastroUnico"
                placeholder="Cadastro Único"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.cadastroUnico}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="text"
                id="dataNascimento"
                name="dataNascimento"
                placeholder="Data de Nascimento"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.dataNascimento}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="number"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Cidade"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.cidade}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Bairro"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.bairro}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="CEP"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.cep}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="rua">Rua</label>
              <input
                type="text"
                id="rua"
                name="rua"
                placeholder="Rua"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.rua}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="numeroCasa">Número Casa</label>
              <input
                type="text"
                id="numeroCasa"
                name="numeroCasa"
                placeholder="Número Casa"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.numeroCasa}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="emailUsuario">Email</label>
              <input
                type="text"
                id="emailUsuario"
                name="emailUsuario"
                placeholder="Email"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.emailUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="fotoUsuario">Foto</label>
              <input
                type="text"
                id="fotoUsuario"
                name="fotoUsuario"
                placeholder="Foto"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.fotoUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senhaUsuario">Senha</label>
              <input
                type="password"
                id="senhaUsuario"
                name="senhaUsuario"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.senhaUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenhaUsuario">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenhaUsuario"
                name="senhaUsuario" // Atualizado para corresponder ao estado do React
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={confirmarSenhaUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenhaUsuario(e)}
              />
            </div>
            <div className="flex justify-around w-full gap-8">
              <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={back}>
                Cancelar
              </button>
              <button className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2' type='submit'>
                {isLoading ? <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                /> :
                  <span>Cadastrar</span>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro