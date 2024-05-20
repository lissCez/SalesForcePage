import Card from "../../Components/Card";
import Menu from "../../Components/Header/Header";
import Alissa from "../../assets/Rectangle 55.png";
import Mirella from "../../assets/Rectangle 54.png";
import Melissa from "../../assets/Rectangle 56.png";
import "../About/style.css";

const determineHeaderColor = (path: string): string => {
    switch (path) {
      case '/about':
        return '#2c86c7';
      case '/Login':
        return '#2e5775';
      case '/Teste10Minutos':
        return '#112cc0'
      default:
        return '#992525';
    }
};

export const About = () => {
    return (
        <>
            <Menu backgroundColor={determineHeaderColor(window.location.pathname)} />
            <h1 className="Titulo">Quem somos</h1>
            <div className="cards">
                <Card
                    Img={Mirella}
                    Nome="Mirella da Silva Cruz Germano"
                    Rm="RM 552777"
                    Github="https://github.com/migermano"
                    Linkedin="https://s3-alpha-sig.figma.com/img/3931/e3c2/b3ae1f61034aaa0c50010b97447c7088?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNUw9UNsBAgqrH0QWo5u-KZArwDuiBs5F1f6MG1wh9466mrsGXnKqQxj4UhDPkltxvaFUizvb93wKhoTKsM3Clnn0d8OvBK9HZnAkZpr8GJJdfllFkPHJ4oaKM89uJ4w3zMV3GT6TKmFf9lCf2J5voiCqm7OGFmoJn-GB0L8Exjw0a0KxFAJtiOOHXJWu-KXtqFyaZMMUErMoJ8X28StSNM0QqcTM9rJGFlZ4pkY0OGN434YrKdGdjSclqGbrwXAk6FKoHBgINDqjUu0~eRNq3qahSVZRuPRiRmS1yCCIcgr-oGCP6ITL5L0DBMXGYx9~cg7Lx98nnZd4mrifM94Wg__" />

                <Card
                    Img={Alissa}
                    Nome="Alissa Silva Cezero"
                    Rm="RM: 553954"
                    Github="https://github.com/lissCez"
                    Linkedin="https://s3-alpha-sig.figma.com/img/3931/e3c2/b3ae1f61034aaa0c50010b97447c7088?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNUw9UNsBAgqrH0QWo5u-KZArwDuiBs5F1f6MG1wh9466mrsGXnKqQxj4UhDPkltxvaFUizvb93wKhoTKsM3Clnn0d8OvBK9HZnAkZpr8GJJdfllFkPHJ4oaKM89uJ4w3zMV3GT6TKmFf9lCf2J5voiCqm7OGFmoJn-GB0L8Exjw0a0KxFAJtiOOHXJWu-KXtqFyaZMMUErMoJ8X28StSNM0QqcTM9rJGFlZ4pkY0OGN434YrKdGdjSclqGbrwXAk6FKoHBgINDqjUu0~eRNq3qahSVZRuPRiRmS1yCCIcgr-oGCP6ITL5L0DBMXGYx9~cg7Lx98nnZd4mrifM94Wg__" />

                <Card
                    Img={Melissa}
                    Nome="Melissa Barbosa de Souza"
                    Rm="RM: 552535"
                    Github="https://github.com/melissabsouza"
                    Linkedin="https://s3-alpha-sig.figma.com/img/3931/e3c2/b3ae1f61034aaa0c50010b97447c7088?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNUw9UNsBAgqrH0QWo5u-KZArwDuiBs5F1f6MG1wh9466mrsGXnKqQxj4UhDPkltxvaFUizvb93wKhoTKsM3Clnn0d8OvBK9HZnAkZpr8GJJdfllFkPHJ4oaKM89uJ4w3zMV3GT6TKmFf9lCf2J5voiCqm7OGFmoJn-GB0L8Exjw0a0KxFAJtiOOHXJWu-KXtqFyaZMMUErMoJ8X28StSNM0QqcTM9rJGFlZ4pkY0OGN434YrKdGdjSclqGbrwXAk6FKoHBgINDqjUu0~eRNq3qahSVZRuPRiRmS1yCCIcgr-oGCP6ITL5L0DBMXGYx9~cg7Lx98nnZd4mrifM94Wg__" />
            </div>
        </>

    );
};

export default About;