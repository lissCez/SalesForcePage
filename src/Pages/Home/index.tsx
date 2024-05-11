import './style.css';
import Footer from '../../Components/Footer';
import Menu from '../../Components/Menu';
import SFIMG3 from '../../assets/php-products-service-generic 1.png';
import SFIMG4 from '../../assets/php-products-sales-generic 2.png';
import SFIMG5 from '../../assets/fundo 1.png';
import grupo1 from '../../assets/Group 17.png';
import grupo2 from '../../assets/Group 18.png';
import grupo3 from '../../assets/Group 19.png';
import grupo4 from '../../assets/Group 20.png';
import SFIMG2 from '../../assets/Group 24.png';
import newsletter from '../../assets/hp-newsletter-card 1.png';
import { Link } from 'react-router-dom';


 const Home = () => {
    return(
        <>
            <Menu/>
            <section className='corpo'>
                <p className='titulo'>
                    <h1 id='textao'>Experimente o Salesforce Starter Suite gratuitamente.</h1>
                    <h5 id='textinho'>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito. Inicie teste gratuitamente.</h5>
                </p>
                <p className='botao01'>
                    <button id='botao1'><Link className='Link' to="/TesteUmMes">faça o teste gratuitamente</Link></button>
                </p>
                <div id='sfimg2'>
                    <img id='img2' src={SFIMG2}/>
                </div>
                    <section id='cartoes'>
                        <div className="cartoes1">
                            <div className="cartao">
                                <div className="texto">
                                    <h2>Pequenas empresas</h2>
                                    <h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</h3>
                                    <a className='assistirdmo' href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a>
                                </div>
                                <img className='sfimg' src={SFIMG3}/>
                            </div>
                            <div className="cartao">
                                <div className="texto">
                                    <h2>Pequenas empresas</h2>
                                    <h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</h3>
                                    <a className='assistirdmo' href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a>
                                </div>
                                <img className='sfimg' src={SFIMG4}/>
                            </div>
                        </div>
                        <div className="cartoes2">
                            <div className="cartao">
                                <div className="texto">
                                    <h2>Pequenas empresas</h2>
                                    <h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</h3>
                                    <a className='assistirdmo' href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a>
                                </div>
                                <img className='sfimg' src={SFIMG3}/>
                            </div>
                            <div className="cartao">
                                <div className="texto">
                                    <h2>Pequenas empresas</h2>
                                    <h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</h3>
                                    <a className='assistirdmo' href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a>
                                </div>
                                <img className='sfimg' src={SFIMG4}/>
                            </div>
                        </div>
                    </section>

                <img id='img5' src={SFIMG5}/>

                <section className='dbaixoimg'>
                    <div id="gradiente">
                        <div className='divisor'>
                            <p id='fonte1'>Afinal, que é CRM?</p>
                            <p id='fonte2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                            <p id='fonte3'>Encontre inovações para qualquer setor de indústria.</p>
                        </div>
                    </div>
                    <p id='fonte4'>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
                    <button id='botao2'><Link className='Link' to= '/Quiz'>Realize um Quiz rápido e descubra qual a licença combina com a sua empresa!</Link></button>
                    <div id="grupoIndustrias">
                        <img id='imggp1' src={grupo1}/>
                        <img id='imggp2' src={grupo2}/>
                        <img id='imggp3' src={grupo3}/>
                        <img id='imggp4' src={grupo4}/>
                    </div>
                </section>


                <div id="bfFooter">
                    <div className='perguntas'>
                        <h1>Perguntas? Fale conosco</h1>
                    </div>
                    <div id='imgnlpai'>
                        <img id='imgnl' src={newsletter}/>
                    </div>
                    <div id='botao03'>
                        <button id='botao3'><a href='https://www.salesforce.com/br/form/contact/contactme/'>ENTRE EM CONTATO</a></button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
 }

 export default Home;