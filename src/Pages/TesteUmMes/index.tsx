import React, { useState } from 'react';
import "./style.css";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Header/Header";
import determineHeaderColor from "../../Components/Header/determineHeaderColor";
import { Link } from "react-router-dom";

const TesteUmMes: React.FC = () => {
    const [formData, setFormData] = useState({
        cargo: '',
        nome: '',
        sobrenome: '',
        email: '',
        telefoneComercial: '',
        empresa: '',
        cnpj: '',
        pais: '',
        idioma: '',
        ddi: '',
        numeroCelular: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://api.seuservidor.com/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('Cadastro realizado com sucesso!');
            } else {
                setMessage('Erro ao realizar o cadastro. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            setMessage('Erro ao realizar o cadastro. Tente novamente.');
        }
    };

    return (
        <main className="main">
            <Menu backgroundColor={determineHeaderColor(window.location.pathname)} />
            <div className="header10">
                <h1 className="title10">Cadastrar para o teste de 1 mês</h1>
            </div>

            <div className="textBold10">
                <p>Preencha os campos abaixo com suas informações</p>
            </div>

            <section className="forms10">
                <div className="formElements10">
                    <input
                        type="text"
                        placeholder="Cargo"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Telefone Comercial"
                        name="telefoneComercial"
                        value={formData.telefoneComercial}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="CNPJ"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="País"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Idioma"
                        name="idioma"
                        value={formData.idioma}
                        onChange={handleChange}
                    />
                    <div className="numberPhone10">
                        <input
                            className="DDI"
                            type="text"
                            placeholder="DDI"
                            name="ddi"
                            value={formData.ddi}
                            onChange={handleChange}
                        />
                        <input
                            className="inputNum"
                            type="text"
                            placeholder="Número de celular..."
                            name="numeroCelular"
                            value={formData.numeroCelular}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="terms10">
                    <p>Concentindo com este contrato você está de acordo com os</p>
                    <p><u><b>Termos de Politica de Privacidade</b></u></p>
                </div>

                <div className="buttonCon10">
                    <button type="button" onClick={handleSubmit}>Conectar</button>
                </div>

                {message && <p>{message}</p>}

                <div className="tinyText10">
                    <p className="blueText10">
                        Já possui uma conta?
                        <b>
                            <br />
                            <Link className='Link' to='/Login'>Conecte-se</Link>
                        </b>
                    </p>
                </div>
            </section>

            <div className="txtImg10">
                <div className="ponteImg">
                    <img className="ponte" src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/06/trailhead-mfe-background.jpg?resize=1536,468" />
                </div>

                <div className="textBottom10">
                    <p className="whiteText10"><b>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</b></p>
                    <p className="whiteText10">Com o Sales Cloud Professional Edition, você tem acesso a:</p>
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
                    <p className="whiteText10"><b>Dúvidas? Entre em contato e fale com um de nossos especialistas: 0800 891 1887.</b></p>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default TesteUmMes;
