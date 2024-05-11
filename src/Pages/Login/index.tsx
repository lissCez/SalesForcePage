import "./style.css";
import rjImg from "../../assets/rjImg.png";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";

const Login = () => {
  return (

    <main className="mainL">
      <Menu/>
      <div className="headerL">
        <h1 className="titleL">Conecte-se</h1>
      </div>

      <div className="textBoldL">
        <p className="verdeIntro">
          Preencha os campos abaixo com suas informações
        </p>
      </div>

      <section className="formsL">
        <h1 className="textFormL">Usuário</h1>
        <input className="inputVerde" type="text" placeholder="Digite seu nome..." />
        <h1 className="textFormL">Senha</h1>
        <input className="inputVerde" type="password" placeholder="Digite sua senha..." />
        <div className="tinyTextL">
          <h4>Esqueceu sua senha?</h4>
        </div>

        <div className="buttonConL">
          <button className="buttonVerde" type="button">Conectar</button>
        </div>

        <div className="tinyTextL">
          <p className="grayTextL">
            Não tem uma conta?
            <b>
              <br />
              <u>Cadastre-se</u>
            </b>
          </p>
        </div>

      </section>

          

        <div className="txtImgL">

          <div className="rjImagL">
            <img className="RjL" src={rjImg}/>
          </div>

          <div className="textBottomL">
            <p  className="whiteTextL"><b>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</b></p>
            
            <p  className="whiteTextL">Com o Sales Cloud Professional Edition, você tem acesso a:</p>

            <ul>
              <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
              <li>Processos, relatórios e dashboards pré-configurados;</li>
              <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
              <li>Guias e outros materiais sobre boas práticas de vendas;</li>
              <li>Onboarding integrado, treinamentos e webinars online;</li>
              <li>Configuração de pontuação e roteamento de leads;</li>
              <li>Ferramentas para automação de tarefas recorrentes;</li>
              <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
            </ul>

            <p className="whiteTextL"> <b>Dúvidas? Entre em contato e fale com um de nossos especialistas: 0800 891 1887.</b></p>
          </div>


        <Footer/>
        </div>

    </main>
  );
};

export default Login;