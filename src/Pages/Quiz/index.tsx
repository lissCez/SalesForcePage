import './style.css';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import industries from '../../assets/Frame 15.png';
import opA from '../../assets/Button - A.png';
import opB from '../../assets/Button - B.png';
import opC from '../../assets/Button - C.png';
import opD from '../../assets/Button - D.png';
import coelhoImg from '../../assets/image 14.png';
import respondeIcon from '../../assets/image 18.png';
import imgBfFooter from '../../assets/image 15.png';
import { Link } from 'react-router-dom';

const Quiz = () => {
    return(
        <>
            <section className="fundoBorrado">
                <Menu/>
                <p>Unleash Your Inner Wizard of Wisdom</p>
                <h4>Embark on a Journey of Knowledge Exploration with Our Extensive Collection of Interactive Quizzes.</h4>
                <p>Hi Andrew! what topic are you interested in?</p>

                <div id="industries">
                    <div className="coluna">
                        <img src={industries}/>
                        <img src={industries}/>
                        <img src={industries}/>
                    </div>
                    <div className="coluna">
                        <img src={industries}/>
                        <img src={industries}/>
                        <img src={industries}/>
                    </div>
                    <div className="coluna">
                        <img src={industries}/>
                        <img src={industries}/>
                        <img src={industries}/>
                    </div>
                </div>

                <button><a href=''>COMEÇAR QUIZ</a></button>
            </section>
            <section className="fundoBorrado">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua</h4>
                <li id="perguntas">
                    <ul className="opcoes">
                        <img src={opA}/>
                        <h4>Lorem ipsum dolor sit amet</h4>
                    </ul>
                    <ul className="opcoes">
                        <img src={opB}/>
                        <h4>Lorem ipsum dolor sit amet</h4>
                    </ul>
                    <ul className="opcoes">
                        <img src={opC}/>
                        <h4>Lorem ipsum dolor sit amet</h4>
                    </ul>
                    <ul className="opcoes">
                        <img src={opD}/>
                        <h4>Lorem ipsum dolor sit amet</h4>
                    </ul>
                </li>
                <button><a href=''>Próximo</a></button>
                <div id="imgCoelho">
                    <img src={coelhoImg} alt="Imagem de um coelho com uma roupa de mago e varinha em sua mão com fundo de forma abstrata azul " />
                </div>
            </section>
            <section className="fundoBorrado">
                <p>Recomendamos essa licença de CRM para sua empresa:</p>
                <div className="resposta">
                    <img src={respondeIcon} alt="imagem de gráfico subindo com fundo verde" />
                    <h3>Sales Cloud</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button><Link to='/Teste10Minutos'>Teste Grátis</Link></button>
                <img src={imgBfFooter} alt="pequenos arbustos com fundo de forma abstrata branca" />
                <Footer/>
            </section>
        </>
    )
}

export default Quiz;