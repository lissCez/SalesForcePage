import "./style.css";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";

const TesteUmMes = () => {
    return(
            <main className="main">
            <Menu/>
            <div className="header10">
                <h1 className="title10">Cadastrar para o teste de 1 mês</h1>
            </div>

            <div className="textBold10">
                <p>
                Preencha os campos abaixo com suas informações
                </p>
            </div>

                <section className="forms10">

                    <div className="formElements10">

                    <input type="text" placeholder="Cargo" />

                    <input type="text" placeholder="Nome" />
                    <br />
                    <input type="text" placeholder="Sobrenome" />

                    <input type="text" placeholder="E-mail" />
                    <br />
                    <input type="text" placeholder="Telefone Comercial" />

                    <input type="text" placeholder="Empresa" />
                    <br />
                    <input type="text" placeholder="CNPJ" />

                    <input type="text" placeholder="País" />
                    <br />
                    <input type="text" placeholder="Idioma" />


                    <div className="numberPhone10">
                        <input className="DDI" type="text" placeholder="DDI" />
                        <input className="inputNum" type="text" placeholder="Número de celular..." />
                    </div>

                    </div>

                    <div className="terms10">
                        <p>Concentindo com este contrato você está de acordo com os</p>
                        <p><u><b>Termos de Politica de Privacidade</b></u> </p>

                        <p>Eu aceito receber notificações em meu e-mail e SMS. Você pode retirar essa opção de ambas as plataformas quando quiser.</p>
                    </div>

                    <div className="buttonCon10">
                        <button type="button">Conectar</button>
                    </div>

                    <div className="tinyText10">
                        <p className="blueText10">
                            Tem uma conta?
                            <b>
                            <br />
                            <u>Conecte-se</u>
                            </b>
                        </p>
                    </div>
                </section>

                <div className="txtImg10">

                    <div className="ponteImg">
                        <img className="ponte" src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/06/trailhead-mfe-background.jpg?resize=1536,468"/>
                    </div>

                    <div className="textBottom10">
                    <p  className="whiteText10"><b>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</b></p>
                    
                    <p  className="whiteText10">Com o Sales Cloud Professional Edition, você tem acesso a:</p>

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

                    <p className="whiteText10"> <b>Dúvidas? Entre em contato e fale com um de nossos especialistas: 0800 891 1887.</b></p>
                </div>
                </div>

                <Footer/>

            </main>
    )
}

export default TesteUmMes