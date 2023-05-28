import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { CredentialsBackground } from "../login/login&registerPageStyled";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <CredentialsBackground>
      <StyledFormContainer>
        <div className="credentialsBox-top">
          <h1>Cadastrar</h1>
          <p>
            Já possui uma conta? Faça <Link to={"/"}>Login</Link>
          </p>
        </div>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Digite seu nome..." />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite seu email..." />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="text" placeholder="Digite sua Senha..." />
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input type="text" placeholder="Digite seu telefone..." />
        </div>
        <button>Cadastrar</button>
      </StyledFormContainer>
    </CredentialsBackground>
  );
};
