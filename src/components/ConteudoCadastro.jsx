import React, { useState } from 'react'; // Importe React e useState
import { useNavigate } from 'react-router-dom'; // Importe useNavigate se estiver usando react-router-dom
import './ConteudoCadastro.css';

export default function AdicionarUsuario() {
  document.title = "ADICIONAR Usuario";
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Chame as funções de validação aqui, por exemplo:
    // validarSenha();
    
    fetch('http://localhost:5000/usuarios', {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Usuario adicionado com sucesso.');
          navigate('/login');
        } else {
          console.log('Erro ao adicionar o usuario. Status da resposta: ' + response.status);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <main>
        <h1>Formulário de cadastro</h1>

        <form name="Cadastro" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <label htmlFor="c-nome" id="l-nome">Nome</label>
            <input type="text" name="nome" id="c-nome" onChange={handleChange} value={usuario.nome} />
            <label htmlFor="c-email" id="l-email">Email</label>
            <input type="email" name="email" id="c-email" onChange={handleChange} value={usuario.email} />
            <label htmlFor="c-senha" id="l-senha">Senha</label>
            <input type="password" name="senha" id="c-senha" onChange={handleChange} value={usuario.senha} />
          </fieldset>
          <input type="submit" value="Cadastrar" id="btnCadastro" />
        </form>
      </main>
    </>
  );
}
