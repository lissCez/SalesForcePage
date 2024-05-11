import "./style.css";
import brasilia1 from "../../assets/brasilia.png";
import Footer from '../../Components/Footer';
import Menu from '../../Components/Menu';


const Teste10Minutos = () => {
  return (
    <main className="main">
      <Menu/>
      <div className="header">
        <h1 className="title">Cadastrar no teste de 10 minutos</h1>
      </div>

      <div className="textBold">
        <p>
          Preencha os campos abaixo com suas informações
        </p>
      </div>

      <section className="forms">
        <h1 className="textForm">Nome</h1>
        <input type="text" placeholder="Digite seu nome..." />
        <h1 className="textForm">E-mail</h1>
        <input type="text" placeholder="Digite sua senha..." />

        <div className="buttonCon">
          <button type="button">Conectar</button>
        </div>

        <div className="tinyText">
          <p className="whiteText">
          Deseja se conectar em uma 
            <b>
              <br/>
              <u>conta já existente?</u>
            </b>
          </p>
        </div>

      </section>

        <div className="txtImg">

          <div className="bsbImag">
            <img className="bsb" src={brasilia1}/>
          </div>

          <div className="textBottom">
            <p><b>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</b></p>  

          <p>Com o Sales Cloud Professional Edition, você tem acesso a:</p>

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
          </div>
        
        <Footer/>
        </div>


    </main>
  );
};

export default Teste10Minutos;
