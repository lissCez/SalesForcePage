import Card from "../../Components/Card";
import Menu from "../../Components/Header/Header";
import Alissa from "../../assets/Rectangle 55.png";
import Mirella from "../../assets/Rectangle 54.png";
import Melissa from "../../assets/Rectangle 56.png";
import determineHeaderColor from "../../Components/Header/determineHeaderColor";
import "../About/style.css";

export const About = () => {
    return (
        <>
            <Menu backgroundColor={determineHeaderColor(window.location.pathname)} />
            <h1 className="Titulo">Quem somos</h1>
            <div className="cards">
                <Card
                    IMG={Mirella}
                    Nome="Mirella da Silva Cruz Germano"
                    Rm="RM 552777"/>

                <Card
                    IMG={Alissa}
                    Nome="Alissa Silva Cezero"
                    Rm="RM: 553954"/>

                <Card
                    IMG={Melissa}
                    Nome="Melissa Barbosa de Souza"
                    Rm="RM: 552535"/>
            </div>
        </>

    );
};

export default About;