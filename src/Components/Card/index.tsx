import GitHub from "../../assets/image 35.png";
import Linkedin from "../../assets/image 36.png";
import './style.css';

type CardAbout = {
    IMG:any,
    Nome: string, 
    Rm: string
}

const Card = ({ IMG, Nome, Rm }: CardAbout) => {
    return ( 
        <>
            <div className="principal">
                <div className="imagens">
                    <img className="img" src={IMG} alt="imagens" />
                </div>

                <div className="container">
                    <div>
                        <h1 className='agah1'>{Nome}</h1>
                        <h4 className='agah4'>{Rm}</h4>
                    </div>

                    <div>
                        <img className="icone" src={GitHub} alt="github"/>
                        <img className="icone" src={Linkedin} alt="linkedin"/>               
                    </div>
                </div>      
            </div>
        </>
    )
}

export default Card;
