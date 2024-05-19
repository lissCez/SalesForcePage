import './style.css'

const determineHeaderColor = (path: string): string => {
    switch (path) {
        case '/Home':
          return '#ffffff';
        case '/about':
          return '#ffffff';
        case '/Login':
          return '#ffffff';
        case '/Teste10Minutos':
          return '#ffffff'
        default:
          return '#ffffff';
    }
};

export default determineHeaderColor;