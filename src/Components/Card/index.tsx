import './style.css';
import Img from '../../assets/salesforceIcon.png'
import IconGithub from '../../assets/youtube.png'
import IconLinkedin from '../../assets/youtube.png'

type CardAbout = {
    Nome: string, 
    Rm: string,
}

const Card = ({ Nome, Rm }: CardAbout) => {
    return ( 
        <>
            <div className="principal">
                <div className="imagens">
                    <img className="img" src={Img} alt="imagens" />
                </div>

                <div className="container">
                    <div>
                        <h1 className='agah1'>{Nome}</h1>
                        <h4 className='agah4'>{Rm}</h4>
                    </div>

                    <div>
                        <img className="icone" src={IconGithub} alt="github"/>
                        <img className="icone" src={IconLinkedin} alt="linkedin"/>               
                    </div>
                </div>      
            </div>
        </>
    )
}

export default Card;
