import api from './api';

class WinesService{


static getWines(name) {

    const url = `/wine/name?wineName=${name}`;
    return api.get(url).then(response => {
      return response.data;
    }).catch((error) => {
        throw error;
    });
  }

  static getAllWines() {

    const url = `/wine`;
    return api.get(url).then(response => {
      return response.data;
    }).catch((error) => {
        throw error;
    });
  }

}



export default WinesService;