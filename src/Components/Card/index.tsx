import './style.css';

type CardAbout = { 
    Img: string, 
    Nome: string, 
    Rm: string,
    IconGithub: string,
    IconLinkedin: string
}

const Card = ({ Img, Nome, Rm, IconGithub, IconLinkedin }: CardAbout) => {
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
