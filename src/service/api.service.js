import axios from 'axios';

class ApiService {

    static get(url){
        return axios.get(url);
    }

    static post(){
       
    }
}

export { ApiService  }