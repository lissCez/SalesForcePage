import { Link } from "react-router-dom";
import './style.css';
import github from '../../assets/image 36.png';


const Footer = () => {
    return(
        <>
            <div id="footer">
                <section id="info">
                    <h1>Info</h1>
                    <div className="link">
                        <Link className='linkinho' to= '/About'>Quem Somos</Link>
                    </div>
                </section>
                <section id="about">
                    <h1>Sobre nós</h1>
                    <a href="https://www.salesforce.com/br/blog" target="_blank" rel="noopener noreferrer">Blog</a>
                    <p></p>
                    <a href="https://www.salesforce.com/company/careers" target="_blank" rel="noopener noreferrer">Carreiras</a>
                </section>
                <section id="help">
                    <h1>Ajuda</h1>
                    <a href="https://www.salesforce.com/br/company/privacy/" target="_blank" rel="noopener noreferrer">Preferência de cookies</a>
                    <p></p>
                    <a href="https://www.salesforce.com/br/company/program-agreement/" target="_blank" rel="noopener noreferrer">Termos de uso</a>
                </section>
                <section id="social">
                    <h1>Social</h1>
                    <div className="icon">
                        <div className="github">
                            <img src={github} alt="imagem da logo vazado do aplicativo GitHub"></img>
                            <a href="https://github.com/lissCez">Alissa</a>
                        </div>
                        <div className="github">
                            <img src={github} alt="imagem da logo vazado do aplicativo GitHub"></img>
                            <a href="https://github.com/migermano">Mirella</a>
                        </div>
                        <div className="github">
                            <img src={github} alt="imagem da logo vazado do aplicativo GitHub"></img>
                            <a href="https://github.com/melissabsouza">Melissa</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer;