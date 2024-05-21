import React, { useState } from 'react';
import "./style.css";
import brasilia1 from "../../assets/brasilia.png";
import Footer from '../../Components/Footer';
import Menu from '../../Components/Header/Header';
import determineHeaderColor from "../../Components/Header/determineHeaderColor";
import { Link } from "react-router-dom";

const Teste10Minutos: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: ''
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
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <h1 className="textForm">E-mail</h1>
                <input
                    type="text"
                    placeholder="Digite seu e-mail..."
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <div className="buttonCon">
                    <button type="button" onClick={handleSubmit}>Conectar</button>
                </div>

                {message && <p>{message}</p>}

                <div className="tinyText">
                    <p className="whiteText">
                        Deseja se conectar em uma 
                        <b>
                            <br/>
                            <Link className='Link' to='/Login'>conta já existente?</Link>
                        </b>
                    </p>
                </div>
            </section>

            <div className="txtImg">
                <div className="bsbImag">
                    <img className="bsb" src={brasilia1} />
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
                    <p><b>Dúvidas? Entre em contato e fale com um de nossos especialistas: 0800 891 1887.</b></p>
                </div>

                <Footer />
            </div>
        </main>
    );
};

export default Teste10Minutos;
