const determineHeaderColor = (path: string): string => {
    switch (path) {
        case '/Home':
          return '#ffffff5a'
        case '/about':
          return '#ffffff5a';
        case '/Login':
          return '#ffffff5a';
        case '/Teste10Minutos':
          return '#ffffff5a'
        default:
          return '#ffffff5a';
    }
};

export default determineHeaderColor;