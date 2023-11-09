import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ConteudoLogin() {
  const [msgstatus, setMsgstatus] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user;

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        for (let x = 0; x < users.length; x++) {
          const u = users[x];
          if (u.email === usuario.email && u.senha === usuario.senha) {
            user = u;
            break;
          }
        }
        if (user) {
          setMsgstatus("Login realizado com SUCESSO!!");
          setClassStatus("login-sucesso");
          navigate("/");
          setMsgstatus("");
          setUsuario({
            email: "",
            senha: "",
          });
        } else {
          setMsgstatus("Usuário e ou Senha incorretos!");
          setClassStatus("login-erro");
        }
      } else {
        setMsgstatus("Erro ao processar a solicitação");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setMsgstatus("Erro ao processar a solicitação");
    }
  };

  return (
    <>
      <main>
        <h1>Login - Informações do Usuário</h1>

        <h2 className={classStatus}>{msgstatus}</h2>

        <form name="Login" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite o seu Email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="idSenha">Senha:</label>
            <input
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite a sua Senha."
              value={usuario.senha}
              onChange={handleChange}
            />
          </fieldset>
          <div className="btn_lc">
            <div className="bt">
              <input type="submit" value="logar" id="btnlogar" />
            </div>
            <div className="bt">
              <p>caso ainda não tenha o login</p>
              <input
                type="button"
                value="Cadastrar"
                id="btnCadastro"
                onClick={() => navigate("/cadastro")}
              />
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
